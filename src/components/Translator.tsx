import { useEffect, useState } from "react";

type Lang = {
  code: string;
  name: string;
};

export default function Translator() {
  const [languages, setLanguages] = useState<Lang[]>([]);
  const [source, setSource] = useState("auto");
  const [target, setTarget] = useState("en");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<
    Array<{ id: string; src: string; tgt: string }>
  >([]);

  useEffect(() => {
    fetch("https://libretranslate.de/languages")
      .then((r) => r.json())
      .then((data) => setLanguages(data as Lang[]))
      .catch(() => {
        setLanguages([
          { code: "en", name: "English" },
          { code: "es", name: "Spanish" },
          { code: "bn", name: "Bengali" },
        ]);
      });
  }, []);

  const translate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    setResult("");

    try {
      const res = await fetch("https://translate.astian.org/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source,
          target,
          format: "text",
        }),
      });

      console.log({
        q: text,
        source,
        target,
        format: "text",
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      const translated = (data.translatedText as string) ?? "";
      setResult(translated);
      setHistory((h) =>
        [{ id: Date.now().toString(), src: text, tgt: translated }, ...h].slice(
          0,
          10
        )
      );
    } catch (err: any) {
      setError(err.message || "Translation failed");
    } finally {
      setLoading(false);
    }
  };

  const swapLanguages = () => {
    if (source === "auto") return;
    const newSource = target;
    const newTarget = source;
    setSource(newSource);
    setTarget(newTarget);
    setText(result);
    setResult(text);
  };

  return (
    <div className="space-y-6">
      {/* Language selectors */}
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">From</label>
          <select
            className="w-full border rounded-md p-2"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          >
            <option value="auto">Detect language</option>
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name} ({l.code})
              </option>
            ))}
          </select>
        </div>

        <div className="self-center">
          <button
            onClick={swapLanguages}
            className="px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
            title="Swap languages"
          >
            ↔
          </button>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">To</label>
          <select
            className="w-full border rounded-md p-2"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name} ({l.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Input and output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Text</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows={4}
            placeholder="Type text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Result</label>
          <textarea
            className="w-full border rounded-md p-2 bg-gray-50"
            rows={4}
            readOnly
            value={loading ? "Translating..." : result}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={translate}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          Translate
        </button>
        <button
          onClick={() => {
            setText("");
            setResult("");
          }}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {error && <div className="text-red-600">Error: {error}</div>}

      {/* History */}
      <div>
        <h3 className="font-semibold mb-2">Recent translations</h3>
        {history.length === 0 ? (
          <p className="text-gray-500 text-sm">No history yet</p>
        ) : (
          <ul className="space-y-1 text-sm">
            {history.map((h) => (
              <li
                key={h.id}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => {
                  setText(h.src);
                  setResult(h.tgt);
                }}
              >
                <strong>{h.src}</strong> → <em>{h.tgt}</em>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
