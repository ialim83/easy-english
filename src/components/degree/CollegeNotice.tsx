

const notices = [
  {
    title: "Class Suspension Notice",
    date: "00/00/00",
    content: (
      <>
        This is to notify all the students of <strong>Honours 1st year</strong> of{" "}
        <span className="text-amber-700">...... department</span> that your class will
        not be held on <strong>...... instant</strong>.
        <br /><br />
        <strong>Reason:</strong> Your <span className="text-amber-700">...... teacher</span> is ill now.
        <br /><br />
        The students are advised to contact the respective department.
      </>
    ),
    signed: "Principal / Chairman of the ...... department",
  },
  {
    title: "Closing Notice",
    date: "00/00/00",
    content: (
      <>
        The notice is hereby given for all the students, officials and teachers of this
        college that the college is going to be closed on the occasion of
        <br />
        <strong className="text-indigo-700">
          Eid Vacation / Christmas Vacation / Puja Vacation
        </strong>
        <br />
        from <strong>00/00/00</strong> to <strong>00/00/00</strong>.
        <br /><br />
        The college will <strong>re-open</strong> on <strong>00/00/00</strong> next.
      </>
    ),
    signed: "Principal\nName of the College",
  },
  {
    title: "Examination Notice",
    date: "00/00/00",
    content: (
      <>
        This is to notify all the students of <strong>Honours 1st year</strong> that the
        <strong> First Semester Test Examination</strong> is going to be held from
        <strong>00/00/00</strong> to <strong>00/00/00</strong>.
        <br /><br />
        The time table of the examination is given below:
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Time</th>
                <th className="border px-4 py-2">Subject Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-6 text-center text-gray-400 italic">
                  To be filled
                </td>
                <td className="border px-4 py-6 text-center text-gray-400 italic">
                  To be filled
                </td>
                <td className="border px-4 py-6 text-center text-gray-400 italic">
                  To be filled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    signed: "Principal / Chairman of the ...... department",
  },
  {
    title: "Class Holding Notice",
    date: "00/00/00",
    content: (
      <>
        This is to notify all the students of <strong>Honours 1st year</strong> of{" "}
        <span className="text-amber-700">...... department</span> that your class is going
        to be held on <strong>...... instant</strong>.
        <br /><br />
        The students are advised to contact the respective department.
      </>
    ),
    signed: "Principal / Chairman of the ...... department",
  },
];

export default function CollegeNotice() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Easy-English Academy
          </h1>
          
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Notices Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header Bar */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  {notice.title}
                </h2>
                {/* <p className="text-indigo-100 text-sm mt-1">
                  Date: {notice.date}
                </p> */}
              </div>

              {/* Body */}
              <div className="p-6 text-gray-800 leading-relaxed">
              <p className="text-center underline">{notice.title}</p>
              <p className="text-right">Date: {notice.date}</p>
                {notice.content}
              </div>

              {/* Signature */}
              <div className="px-6 pb-6 pt-2 text-right">
                <div className="inline-block text-right border-t border-gray-300 pt-4">
                  <p className="text-gray-700 font-medium whitespace-pre-line">
                    {notice.signed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Made By: Alim Sir</p>
          <p>Lecturer, Ranigonj Mohila Degree College</p>
        </div>
      </div>
    </div>
  );
}