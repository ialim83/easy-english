import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "pdfjs-dist/build/pdf.worker.entry";

const Correction = () => {
  return (
    <div className="h-full w-full md:w-[85%] mx-auto">
      <div className="py-20">
        <h1 className="text-center">Correction</h1>
      </div>

      <div>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl="/RULESOFCORRECTION.pdf" />
        </Worker>
      </div>

      {/* DOwnload button */}
      <div className="text-center py-4 sticky bottom-0 left-0 right-0">
        <a
          href="/RULESOFCORRECTION.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
      <div className="text-center">
        <p className="">
          Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ জমা হয়।
          গেলারিতে পাওয়া যাবে না।
        </p>
      </div>
    </div>
  );
};

export default Correction;
