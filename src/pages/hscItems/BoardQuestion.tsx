import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "pdfjs-dist/build/pdf.worker.entry";

const BoardQuestion = () => {
  return (
    <div className="h-full w-full md:w-[85%] mx-auto">
      <div className="py-20">
        <h1 className="text-center">HSC Board Question</h1>
      </div>

      <div className="py-5">
        <div>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/hsc-2nd-Paper.pdf" />
          </Worker>
        </div>
        <div className="text-center py-4">
          <a
            href="/hsc-2nd-Paper.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="py-5">
        {/* <div>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/hsc-1st-Paper.pdf" />
          </Worker>
        </div> */}

        <div className="text-center py-4">
          <a
            href="/hsc-1st-Paper.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoardQuestion;
