const TranslateWidget = () => {
  return (
    <div>
      <div className="">
        <p className="text-center pb-6">Translate any Language</p>
      </div>
      <div className="text-center border py-4 border-blue-500 rounded-lg max-w-fit mx-auto">
        <a
          className="p-8 text-blue-600 "
          href="https://translate.google.com/?sl=en&tl=bn&op=translate"
        >
          Choose a word
        </a>
      </div>
    </div>
  );
};

export default TranslateWidget;


