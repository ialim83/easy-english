import PluralForms from "../../components/PluralForms";

const Number = () => {
  return (
    <div>
      <h2 className="text-center text-green-500 py-20">Number/বচন</h2>
      <div className="px-3 lg:w-1/2 mx-auto ">
        <h3 className="text-pink-600">
          Noun-এর বহুবচনে রূপান্তর (Pluralisation)
        </h3>
        অধিকাংশ noun-এর শেষে S যোগ করলে plural হয়।
        <br />
        তবে pluralisation-এর ব্যাপারে নিচে কিছু গুরুত্বপূর্ণ আলোচনা করা হলো:
        <br />
        Singular অবস্থায় বিশেষ বানান হলে plural-এ বিশেষ রূপ ধারণ করে এরূপ কিছু
        শব্দ নিচে দেয়া হলো:
        <br />
        <br />
        <PluralForms />
      </div>
    </div>
  );
};

export default Number;
