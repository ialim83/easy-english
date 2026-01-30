const Video = () => {
  return (
    <div>
      <div className="py-20 h-full">
        <div className="">
          <div className="">
            <iframe frameBorder='0' width='640' height='360' allowFullScreen src="https://www.awesomescreenshot.com/embed?id=39743359&shareKey=31df06b8a788aef7a3d51cae2e821379"></iframe>
          </div>
        </div>
        <div className="w-[95%] md:w-[50%] mx-auto">
          <iframe
            className="min-w-full"
            height="415"
            src="https://www.youtube.com/embed/3yrtsZDSZGQ?si=59M4i2zWcaDFGvNc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
