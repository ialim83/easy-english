function Beginner() {
  return (
    <div className="h-full lg:w-1/2 mx-auto px-5">
      <div className="py-10">
        <h1 className="text-center text-3xl lg:text-5xl">Beginner Level</h1>
      </div>
      {/* punctuate */}
      <div className="dark:text-gray-300">
        <h3> Punctuation কাকে বলেঃ </h3>
        <p className="">
          Punctuation English Language এর অন্যতম component. Punctuation শব্দটি
          Latin শব্দ Punctum থেকে উৎপন্ন হয়েছে | Punctum শব্দের অর্থ Point বা
          বিন্দু । Punctuation হল বক্তব্যের tone বা variations বা বিভিন্নতা
          প্রকাশক বিরতি চিহ্ন | এর উদ্দেশ্য হল বক্তব্যকে সুস্পষ্ট করা ।
        </p>

        {/* 1. Assertive, imperative and optative sentence */}
        <h2 className="pt-5">Rules of Punctuation</h2>
        <div className="mb-3">
          <p className="text-lg">
            <span className="animateText font-bold">Rule: 1.</span> Assertive,
            imperative এবং optative sentence এর শেষে Full Stop (.) বসে।
            <br />
            Example: My you be happy.
          </p>
        </div>

        {/* 2. Interrogative sentence */}
        <div className="mt-3">
          <h2 className="text-lg font-semibold">
            2. Interrogative বাক্যের শেষে প্রশ্নবোধক (?) চিহ্ন বসে।
          </h2>
          <p className="text-base">Examples:</p>
          <ul className="list-disc ml-3">
            <li>Do you want to pass?</li>
            <li>What is he?</li>
          </ul>
        </div>

        {/* 3. Exclamatory sentence */}
        <div className="mt-3">
          <h2 className="text-lg font-semibold">
            3. Exclamatory বাক্যের শেষে এবং Interjection এর পরে Note of
            exclamation (!) বসে।
          </h2>
          <p className="text-base">Examples:</p>
          <ul className="list-disc ml-3">
            <li>Alas! I am undone.</li>
            <li>How fine it is!</li>
          </ul>
          <p className="text-base py-3">
            Interjection এর Examples: <br /> Alas, Hurrah, Oh, Hush, Hi, etc.
          </p>
        </div>

        {/* 4. Say/Said, tell/told, replied, etc */}
        <div className="mb-3">
          <p className="text-base">
            4. Say/said, tell/told, reply(ied), ask(ed), pray(ed)/ wish(ed),
            exclaim(ed) with joy, order(ed), request(ed) এর পরে that/ If/
            whether না থাকলে এগুলোর পরে Comma (,) বসে।
            <br />
            <span className="text-rose-500 font-bold">কিন্তু, </span> <br />
            এগুলোর পরে object থাকলে obj এর পরে কোমা (,) বসে। আর এগুলোর পরে কমা
            বসলে কমার পরের বাক্যের উপরে ইনভারটেড ("-") কমা বসে। ইনভারটেড ("-")
            কমা শেষে হলে বাক্যানুসারে (.)/ (?)/ (!) এর যেকোন একটি বসে।
            <br />
            যেমনঃ <br />
            The man said to me, "Are you hungry?" <br />
            <span className="text-rose-500 font-bold">কিন্তু, </span> <br />
            এগুলোর পরে that/ If/ whether/to থাকলে এর পরের বাক্যের শেষে ফুলস্টপ
            বসে ।
            <br />
            Examples: <br />
            The man asked me if I was hungry.
          </p>
        </div>
        {/* 5. As, since, though, etc */}
        <div className="mb-3">
          <p className="text-base">
            5. As, since, though, although, if, when এর পরে যদি বাক্য থাকে তবে
            Comma (,) বসে। Example:
          </p>
          <p className="text-base">Though he was ill, he attended the class.</p>
        </div>
        {/* 6. So, yes, sir, sorry, hello */}
        <div className="mb-3">
          <p className="text-base">
            6. So, yes, sir, sorry, Hi, hello এগুলির পরে সাধারণত কমা (,) বসে।{" "}
            <br />
            Example: <br />
            Yes, I've understood.
            <br />
            কিন্তু সম্বোধনসুচক শব্দ যদি বাক্যের শুরুতে থাকে তবে এর পরে কোমা বসে,
            যদি বাক্যের শেষে থাকে তবে এর আগে কোমা বসে, যদি বাক্যের মাঝখানে থাকে
            তবে এর আগে এবং পরে কোমা বসে। যেমনঃ
            <ul className="list-disc ml-6">
              <li>Jerry, have you seen your mother?</li>
              <li> ave you seen your mother, Jerry?</li>
              <li> ave you seen your mother, Jerry?</li>
            </ul>
          </p>
        </div>
        {/* 7. Contractions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            7. Contractions (সংক্ষেপ) এর Apostrophe (')
          </h2>
          <p className="text-base">
            কোনো শব্দের বাদ অংশের স্থলে Apostrophe (') বসে। Example: I've (=I
            have) gone there.
          </p>
        </div>
        {/* 8. Possessive case */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">8. Possessive case</h2>
          <p className="text-base">
            Possessive case এর শেষে Apostrophe (') বসে। অর্থাৎ কোন নামার সঙ্গে S
            যুক্ত থাকলে সেই নাম S এর মাঝখানে উপরে কোমা বসে।
            <br />
            Example: Rahim's book.
          </p>
        </div>
      </div>
      {/* capitalization */}

      <div className="my-8">
        <h1 className="text-2xl font-bold ">Capitalization</h1>

        {/* 1. Start of sentence */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            1. Sentence এর প্রথম শব্দ Capital Letter দিয়ে শুরু করতে হয়।
          </h2>
        </div>

        {/* 2. Proper Noun */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            2. Proper Noun এর প্রথম অক্ষর বড় হাতের হয়।
          </h2>
        </div>

        {/* 3. Days, months, names, etc. */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            3. দিনের নাম, মাসের নাম, উপাধি বা তাদের Abbreviation, উপাধি এবং
            উপাধির নাম, শিক্ষা প্রতিষ্ঠানের নামের প্রথম অক্ষর, ধর্মীয়
            প্রতিষ্ঠান বা ধর্মের নাম, জাতি এবং ধর্মীয় সম্প্রদায়ের নাম এবং
            ঐতিহাসিক ঘটনার প্রথম অক্ষর Capital Letter হয়।
            <br />
            Examples:
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Proper Noun:</strong> I met Raton yesterday.
            </li>
            <li>
              <strong>দিনের নাম:</strong> I came home on Monday.
            </li>
            <li>
              <strong>উপাধি বা পদবি:</strong> M.A./B.A.
            </li>
            <li>
              <strong>মাসের নাম:</strong> February.
            </li>
            <li>
              <strong>শিক্ষা প্রতিষ্ঠানের নাম:</strong> Dhanmondi Girls School.
            </li>
            <li>
              <strong>পবিত্র গ্রন্থের নাম:</strong> The Quran is a holy book.
            </li>
          </ul>
        </div>

        {/* 4. Pronoun and Interjection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            4. Pronoun "I" (আমি) এবং Interjection সর্বদা বড় হাতের হয়।
            <br />
            Example:
          </h2>
          6
          <ul className="list-disc ml-6">
            <li>Oh, Good bless me.</li>
            <li>Interjection includes: O, Oh, Alas, Hurra.</li>
          </ul>
        </div>
      </div>

      {/* button */}
      <div className="py-5">
        <div className="text-center py-4">
          <a
            href="/punctuation.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* HSC EXERCISE
       */}
      <div className="py-10">
        HSC Punctuation and Capitalization all board question 2019
        <br />
        <br />
        1. Use capitals and punctuation marks where necessary in the following
        texts. [Dhaka Board-2019]
        <br /> Student: Excuse me sir I want to discuss with you some
        grammatical problems.
        <br />
        Teacher: What class are you in
        <br />
        Student: Sir I am in class XI, I am a newly admitted student here.
        <br />
        Teacher: Okay tell me your problems
        <br />
        Student: I want to understand the difference between a phrase and a
        clause.
        <br />
        Teacher: Don’t worry. Ill help you understand the difference.
        <br />
        <br />
        Answer:
        <br />
        Student: Excuse me, sir. I want to discuss with you some grammatical
        problems.
        <br />
        Teacher: What class are you in?
        <br />
        Student: Sir, I am in class Xl. I am a newly admitted student here.
        <br />
        Teacher: Okay. Tell me your problems.
        <br />
        Student: I want to understand the difference between a phrase and a
        clause.
        <br />
        Teacher: Don't worry. I'll help you understand the difference.
        <br />
        <br />
        2. Use capitals and punctuation marks where necessary in the following
        texts.[Rajshahi Board-2019]
        <br />
        <br />
        You’ve cut off your hair, asked Jim, laboriously as if he had not
        arrived at that patent fact yet even after the hardest mental labour.
        Cut it off and sold it, said Della. Don’t you like me just as well,
        anyhow Im me without my hair ain’t I Jim looked about the room
        curiously. You say your hair is gone he said with an air almost of
        idiocy.
        <br />
        <br />
        Answer: "You've cut off your hair?" asked Jim, laboriously as if he had
        not arrived at that patent fact yet even after the hardest mental
        labour. "Cut it off and sold it," said Della. "Don't you like me just as
        well, anyhow? I'm me, without my hair, ain't I?" Jim looked about the
        room curiously. "You say your hair is gone?" he said, with an air almost
        of idiocy.
        <br />
        <br />
        3. Use capitals and punctuation marks where necessary in the following
        texts.[Cumilla Board-2019]
        <br />
        <br />
        Sajid: Hurrah weve won the match.
        <br />
        Sifat: What match Sajid
        <br />
        Sajid: The football match between your school. team and our school team.
        <br />
        Sifat: Oh my Almighty! How did it happen?
        <br />
        Sajid: We won by 3 goals to one (1);
        <br />
        Sifat: I thought our team was better than yours.
        <br />
        Sajid: The result shows who is better.
        <br />
        Sifat: Anyway, well do better next year.
        <br />
        Sajid: Best of luck sifat.
        <br />
        <br />
        Answer:
        <br />
        Sajid: Hurrah! We've won the match.
        <br />
        Sifat: What match, Sajid?
        <br />
        Sajid: The football match between your school team and our school team.
        <br />
        Sifat: Oh my Almighty! How did it happen?
        <br />
        Sajid: We won by 3 goals to one (1).
        <br />
        Sifat: I thought, our team was better than yours.
        <br />
        Sajid: The result shows who is better.
        <br />
        Sifat: Anyway, we'll do better next year.
        <br />
        Sajid: Best of luck, Sifat.
        <br />
        <br />
        4. Use capitals and punctuation marks where necessary in the following
        texts.[Jashore Board-2019]
        <br />
        Jerry: I can chop some wood today.
        <br />
        Writer: But Ive a boy coming from the orphanage.
        <br />
        Jerry: Im the boy <br />
        Writer: You But youre very small in size.
        <br />
        Jerry: Size doesn’t matter chopping wood. Some of the big boys don’t
        chop well. Ive been chopping wood for a long time
        <br />
        Writer: Very well theres the axe. Go ahead see what you can do
        <br />
        <br />
        Answer:
        <br />
        Jerry: I can chop some wood today.
        <br />
        Writer: But I've a boy coming from the orphanage.
        <br />
        Jerry: I'm the boy.
        <br />
        Writer: You? But you're small in size.
        <br />
        Jerry: Size doesn't matter chopping wood. Some of the big boys don't
        chop well. I've been chopping wood for a long time.
        <br />
        Writer: Very well. There's the axe. Go ahead. See, what you can do.
        <br />
        <br />
        5. Use capitals and punctuation marks where necessary in the following
        texts.[Sylhet Board-2019]
        <br />
        The traveller said to the peasant “Can you tell me the way to the
        nearest inn” The peasant said “Yes I can Do you want one in which you
        can spend the night” The traveller said, “I don’t wish to stay there I
        only want a meal” Follow me and I will take you to a nice one.
        <br />
        <br />
        Answer: The traveller said to the peasant, “Can you tell me the way to
        the nearest inn?” The peasant said, “Yes, I can. Do you want one in
        which you can spend the night?” The traveller said, “I don't wish to
        stay there. I only want a meal.” “Follow me, and I will take you to a
        nice one.”
        <br />
        <br />
        6. Use capitals and punctuation marks where necessary in the following
        texts. [Chattogram Board-2019]
        <br />
        <br />
        Student: Excuse me sir. May i come in?
        <br />
        Teacher: yes come in.
        <br />
        Student: Thank you sir.
        <br />
        Teacher: What can i do for you.
        <br />
        Student: Would you kindly make me clear about the use, of this
        punctuation mark.
        <br />
        Teacher: Didnt you attend my class yesterday?
        <br />
        Student: No sir. i did not come.
        <br />
        <br />
        Answer:
        <br />
        Student: Excuse me, sir. May I come in?
        <br />
        Teacher: Yes, come in.
        <br />
        Student: Thank you, sir.
        <br />
        Teacher: What can! do for you?
        <br />
        Student: Would you kindly make me clear about the use of this
        punctuation mark?
        <br />
        Teacher: Didn't you attend my class yesterday?
        <br />
        Student: No, sir. I did not come.
        <br />
        Teacher: Why? You must not miss any class.
        <br />
        Student: I'll never miss any class, sir.
        <br />
        Teacher: Why you must not miss any class.
        <br />
        Student: I'll never miss any class, sir.
        <br />
        <br />
        7. Use capitals and punctuation marks where necessary in the following
        texts. [Barishal Board-2019]
        <br />
        While I was going to market yesterday I met a boy begging in the street.
        On being asked to tell the reason for begging the boy with a sad mind
        and tearful eyes said oh sir I have a sad tale to tell would you please
        hear my story. Yes, I would love to I said to him. Instead of telling
        the story, the boy simply began to cry. <br />
        <br />
        Answer: While I was going to the market yesterday. I met a boy begging
        in the street. On being asked to tell the reason for begging. The boy
        with a sad mind and tearful eyes said, oh! sir, I have a sad tale to
        tell. Would you please hear my story? Yes, I would love to, I said to
        him. Instead of telling the story, the boy simply began to cry. <br />
        <br />
        8. Use capitals and punctuation marks where necessary in the following
        texts.[Dinajpur Board-2019]
        <br />
        Hasan: Can you tell me a little about Dhaka
        <br />
        Hasib: Sure what would you like to know
        <br />
        Hasan: Well whats a good time to visit there? Hasib: I think you can
        visit in winter.
        <br />
        Hasan: Good and what should I see there
        <br />
        Hasib: Well you can visit Sonargaon Folk Art Museum and you can see the
        handicrafts. But you <br />
        must not leave Dhaka without visiting the Lalbagh Fort.
        <br />
        Hasan: Anything else.
        <br />
        Hasib: Oh yes if you have time you may visit Ahsan Manjil. You could
        have an excellent experience of Mughal and British architecture.
        <br />
        <br />
        Answer:
        <br />
        Hasan: Can you tell me a little about Dhaka?
        <br />
        Hasib: Sure. What would you like to know?
        <br />
        Hasan: Well, what's a good time to visit there?
        <br />
        Hasib: I think you can visit in winter.
        <br />
        Hasan: Good and what should | see there?
        <br />
        Hasib: Well, you can visit Sonargaon Folk Art Museum and you can see the
        handicrafts. But you must not leave Dhaka without visiting the Lalbagh
        Fort.
        <br />
        Hasan: Anything else?
        <br />
        Hasib: Oh, yes. If you have, time, you may visit Ahsan Manjil. You could
        have an excellent experience of Mughal and British architecture.
        <br />
        <br />
        HSC Punctuation and Capitalization all board question 2018
        <br />
        <br />
        1. Use capitals and punctuation marks where necessary in the following
        texts. [Combined Board Exam Kh Set-18]
        <br />
        One day while going to college I met an old man who had nothing of his
        own having seen me he began to cry but could not as he was too weak to
        cry feeling a great pity for him I wanted to know about him what led him
        to this miserable condition so I started asking him questions.
        <br />
        <br />
        Answer: One day while going to college, I met an old man who had nothing
        of his own. Having seen me, he began to cry but could not as he was too
        weak to cry. Feeling great pity for him, I wanted to know about him.
        “What led him to this miserable condition?” So, I started asking him
        questions.
        <br />
        <br />
        2. Use capitals and punctuation marks where necessary in the following
        texts. [Combined Board Exam Kha Set-18]
        <br />
        Bindu: do you read a newspaper regularly Hema.
        <br />
        Hema: Yes I do. What about you.
        <br />
        Bindu: To tell you frankly I do not read a newspaper regularly.
        <br />
        Hema: Why you get enough time.
        <br />
        Bindu: I do but I do not like it. Moreover I think it is a wastage of
        time. Hema: Strange why do you think so.
        <br />
        Answer: Bindu: Do you read a newspaper regularly, Hema?
        <br />
        Hema: Yes, !do. What about you?
        <br />
        Bindu: To tell you frankly, I do not read newspaper regularly. Hema:
        Why? You get enough time.
        <br />
        Bindu: I do, but I do not like it. Moreover, I think it is a wastage of
        time.
        <br />
        Hema : Strange! Why do you think so?
        <br />
        HSC Punctuation and Capitalization all board question 2017
        <br />
        <br />
        1. Use capitals and punctuation marks where necessary in the following
        texts. [Dhaka Board-2017] Abid: We are about to finish our H.S.C
        examination Are you thinking about your future Hasib: Yes, what about
        you <br />
        Abid: I want to pursue higher education what are your plans
        <br />
        Hasib: I rather follow some vocational courses to make my career
        <br />
        Abid: Really have you thought of any particular vocation
        <br />
        Hasib: Yes, I would like to join the Fashion Design course This career
        has a prospect these days
        <br />
        Abia: Is it suitable for boys
        <br />
        Hasib: Why not Boys are as good as girls in many professions now- days
        Whats your future plan Abid: I would like to go for teaching
        <br />
        Hasib: It’s a good profession for a studious boy like you <br />
        <br />
        Answer:
        <br />
        Abid: We are about to finish our H.S.C examination. Are you thinking
        about your future? Hasib: Yes, what about you?
        <br />
        Abid: I want to pursue higher education. What are your plans?
        <br />
        Hasib: I rather follow some vocational courses to make my career.
        <br />
        Abid: Really! Have you thought of any particular vocation?
        <br />
        Hasib: Yes, I would like to join the Fashion Design course. This career
        has a prospect these days
        <br />
        Abid: Is it suitable for boys?
        <br />
        Hasib: Why not? Boys are as good as girls in many professions nowadays.
        What's your future plan? Abid: I would like to go for teaching.
        <br />
        Hasib: It's a. good profession for a studious boy like you.
        <br />
        <br />
        2. Use capitals and punctuation marks where necessary in the following
        texts. [Rajshahi Board-2017]
        <br />
        “I’m not in the least hungry,” my guest sighed “but if you insist I
        don’t mind having some asparagus.” I ordered them. “Aren’t you going to
        have any” “No I never eat asparagus.” “I know there are people who don’t
        like them. The fact is you ruin your palate by all the meat you eat.”
        “Coffee” I said “Yes, just an ice cream and coffee” she answered.
        <br />
        <br />
        Answer: “I'm not in the least hungry,” my guest sighed, “but if you
        insist I don't mind having some asparagus! ordered them. to have an
        "Aren't you going to have any?" "No, I never eat asparagus." "| know
        there are people who don't like them. The fact is, you ruin your palate
        by all the meat you eat. "Coffee", I said. "Yes, just an ice cream and
        coffee," she answered.
        <br />
        <br />
        <br />
        3. Use capitals and punctuation marks where necessary in the following
        texts.[Cumilla Board-2017; Dinajpur Board-2016]
        <br />
        how is your father rana said mr karim he is very well thank you replied
        rana i am glad to hear that he is in good health said mr karim.
        <br />
        <br />
        Answer: “How is your father, Rana?” said Mr Karim. “He is very well.
        Thank you,” replied Rana. “I am glad to hear that he is in good health,"
        said Mr Karim.
        <br />
        <br />
        4. Use capitals and punctuation marks where necessary in the following
        texts.[Jashore Board-2017; Sylhet Board-2016]
        <br />
        Tourist: How old is the edifice guide
        <br />
        Guide: Madame its a 15th century edifice
        <br />
        Tourist: What a wonderful edifice it is Guide. It was built by Akbar the
        then emperor of India.
        <br />
        Tourist: Oh! I see
        <br />
        Guide: Madame we should move now. The sun is about to set. It would be
        dark soon. Tourist: Isnt the place safe?
        <br />
        Guide: It is. But the security does not allow anybody after sunset.
        <br />
        <br />
        Answer: <br />
        Tourist: How old is the edifice, guide?
        <br />
        Guide: Madame, it's a 15th-century edifice.
        <br />
        Tourist: What a wonderful edifice it is!
        <br />
        Guide: It was built by Akbar, the then emperor of India.
        <br />
        Tourist: Oh! I see.
        <br />
        <br />
        Guide: Madame, we should move now. The sun is about to set. It would be
        dark soon. Tourist: Isn't the place safe?
        <br />
        <br />
        Guide: It is. But the security does not allow anybody after sunset.
        <br />
        <br />
        5. Use capitals and punctuation marks where necessary in the following
        texts. [Chattogram Board-2017]
        <br />
        <br />
        Son: Did you keep a diary during the liberation war
        <br />
        Father: Yes I did.
        <br />
        Son: Can I have a look at it?
        <br />
        Father: I’m afraid, Ive lost it.
        <br />
        Son: Can you remember anything about it
        <br />
        Father: Yes, I remember one event there were lots of sounds and bangs
        outside one night. You wanted to look out but we didn’t let you.
        <br />
        Son: Why
        <br />
        Father: Because it was very dangerous. You were only four years old then
        <br />
        Son: I can’t remember anything.
        <br />
        Father: Its natural. No one can remember all from early childhood.
        <br />
        <br />
        Answer:
        <br />
        Son: Did you keep a diary during the liberation war?
        <br />
        Father: Yes, I did. Son: Can I have a look at it?
        <br />
        Father: I'm afraid I've lost it.
        <br />
        Son: Can you remember anything about it?
        <br />
        Father: Yes, I remember one event. There were lots of sounds and bangs
        outside one night. <br />
        You wanted to look out but we didn't let you.
        <br />
        Son: Why?
        <br />
        Father: Because it was very dangerous. You were only four years old
        then.
        <br />
        Son: I can't remember anything.
        <br />
        Father: It's natural. No one can remember all from early childhood.
        <br />
        <br />
        6. Use capitals and punctuation marks where necessary in the following
        texts.[Sylhet Board-2017]
        <br />
        Entering the study my elder brother looked around and burst out in
        disgust. How dirty you <br />
        have made the room! Why do you use it if you cant keep it tidy I said, i
        am extremely sorry I have <br />
        been a nuisance in future youll never see the room in such a bad
        condition I promise.
        <br />
        <br />
        Answer:
        <br />
        Entering the study, my elder brother looked around and burst out in
        disgust, "How dirty you <br />
        have made the room! Why do you use it if you can't keep it tidy?" I
        said, "I am extremely sorry. I <br />
        have been a nuisance. In future, you'll never see the room in such a bad
        condition. I promise."
        <br />
        <br />
        7. Use capitals and punctuation marks where necessary in the following
        texts.[Barishal Board-2017]
        <br />
        Myself: Good morning Rana. How are you?
        <br />
        Rana: I am so so and you
        <br />
        Myself: I am. well. But why aren’t you completely well.
        <br />
        Rana: In every examination I’m cutting a sorry figure.
        <br />
        Myself: Whats the reason? Dont you utilize your time properly?
        <br />
        Rana: I spend most of the time in watching TV.
        <br />
        Myself: Recreation is necessary. But spending too much time on this has
        no good side.
        <br />
        Rana: I don’t feel bored in watching TV.
        <br />
        Myself: But as a student, you should study more and more.
        <br />
        Rana: Thank you for your good advice.
        <br />
        Myself: Welcome.
        <br />
        <br />
        Answer:
        <br />
        Myself: Good morning, Rana. How are you?
        <br />
        Rana: I am so so. And you?
        <br />
        Myself: lam well. But why aren't you completely well?
        <br />
        Rana: In every examination, I'm cutting a sorry figure.
        <br />
        Myself: What's the reason? Don't you utilize your time properly?
        <br />
        Rana: I spend most of the time watching TV.
        <br />
        Myself: Recreation is necessary. But spending too much time on this has
        no good side.
        <br />
        Rana: I don't feel bored watching TV.
        <br />
        Myself: But as a student, you should study more and more.
        <br />
        Rana: Thank you for your good advice.
        <br />
        Myself: Welcome.
        <br />
        <br />
        8. Use capitals and punctuation marks where necessary in the following
        texts.[Dinajpur Board-2017]
        <br />
        Aryan: Do you read a newspaper regularly Farhan
        <br />
        Farhan: Yes I do. What’s about you
        <br />
        Aryan: To tell you frankly I do not read a newspaper regularly.
        <br />
        Farhan: Why you get enough time during the break in the college.
        <br />
        Aryan: Yes I do get but I do not like. Moreover I think it is a wastage
        of time.
        <br />
        Farhan: Remember newspaper is called the ‘storehouse’ of knowledge. The
        more you will read a newspaper the more you will learn.
        <br />
        Aryan: Then, from today, I will start reading a newspaper
        <br />
        Farhan: Yes, that’s like a good friend.
        <br />
        <br />
        Answer:
        <br />
        Aryan: Do you read a newspaper regularly, Farhan?
        <br />
        Farhan: Yes, !do. What's about you?
        <br />
        Aryan: To tell you frankly, I do not read a newspaper regularly.
        <br />
        Farhan: Why? You get enough time during the break-in college.
        <br />
        Aryan: Yes, !do get but I do not like. Moreover, I think it is a wastage
        of time.
        <br />
        Farhan: Remember, a newspaper is called the 'storehouse' of knowledge.
        The more you will <br />
        read a newspaper, the more you will learn.
        <br />
        Aryan: Then, from today, I will start reading a newspaper.
        <br />
        Farhan: Yes, that's like a good friend.
        <br />
        <br />
        HSC Punctuation and Capitalization all board question 2016
        <br />
        <br />
        <br />
        1. Use capitals and punctuation marks where necessary in the following
        texts. [Dhaka <br />
        Board-2016]
        <br />
        A: Whats solar energy?
        <br />
        B: Its one of the renewable energy sources.
        <br />
        A: Why is it called green energy?
        <br />
        B: Well its green energy because it helps us keep the earth green I mean
        it doesn’t emit any pollutant in the atmosphere when we produce and use
        it.
        <br />
        A: I see then it must be a clean source of energy.
        <br />
        B: Exactly. And that’s why its also called clean energy.
        <br />
        <br />
        <br />
        Answer:
        <br />
        A: What's solar energy?
        <br />
        B: It's one of the renewable energy sources.
        <br />
        A: Why is it called green energy?
        <br />
        B: Well. It's green energy because it helps us keep the earth green, I
        mean it doesn't emit any pollutant in the atmosphere when we produce and
        use it.
        <br />
        A: I see. Then it must be a clean source of energy.
        <br />
        B: Exactly. And that's why it's also called clean energy.
        <br />
        <br />
        2. Use capitals and punctuation marks where necessary in the following
        texts.[Rajshahi Board-2016]
        <br />
        Husband: Cant you cook food properly
        <br />
        Wife: I cook food properly the problem is with you.
        <br />
        Husband: Really these foods are crap they taste pathetic.
        <br />
        Wife: I spend time in the kitchen from morning till afternoon. I work
        hard. I take care of two children at home. What do you do?
        <br />
        Husband: I work hard and earn money that you spend lavishly. Wife: How
        dare you say that.
        <br />
        Husband: Well that is the truth
        <br />
        Answer:
        <br />
        Husband: Can't you cook food properly?
        <br />
        Wife: I cook food properly. The problem is with you.
        <br />
        Husband: Really these foods are crap. They taste pathetic.
        <br />
        Wife: I spend time in the kitchen from morning till afternoon. I work
        hard. I take care of two children at home. What do you do?
        <br />
        Husband: I work hard and earn money that you spend lavishly.
        <br />
        Wife: How dare you say that?
        <br />
        Husband: Well. That is the truth.
        <br />
        <br />
        <br />
        3. Use capitals and punctuation marks where necessary in the following
        texts.[Cumilla Board-2016]
        <br />
        Arif: Hello How are you Zakia?
        <br />
        Zakia: Fine. What about you de motor
        <br />
        Arif: Well I was a bit sick.
        <br />
        Zakia: Really What happened stomach
        <br />
        Arif: Stomach upset. I had outside food. It troubles my stomach.
        <br />
        Zakia: That’s why I always try to avoid outside food they are
        unhygienic.
        <br /> Arif: I’m not going to have it anymore.
        <br />
        Zakia: Anyway, you take care bye.
        <br />
        Arif: Bye.
        <br />
        <br />
        Answer:
        <br />
        Arif: Hello, how are you, Zakia?
        <br />
        Zakia: Fine. What about you?
        <br />
        Arif: Well, I was a bit sick.
        <br />
        Zakia: Really! What happened?
        <br />
        Arif: Stomach upset. I had outside food. It troubles my stomach.
        <br />
        Zakia: That's why I always try to avoid outside food. They are
        unhygienic.
        <br />
        Arif: I'm not going to have it anymore.
        <br />
        Zakia: Anyway, you take care. Bye.
        <br />
        Arif: Bye.
        <br />
        <br />
        4. Use capitals and punctuation marks where necessary in the following
        texts.[Jashore Board-2016]
        <br />
        Nazmul: Excuse me where is the nearest hospital
        <br />
        Arafat: Its about 2 kilometres from here. You will have to hire a taxi
        You can also go by bus
        <br />
        Nazmul: I see Is there a bus station near here
        <br />
        Arafat: Yes there is a bus stop at the corner.
        <br />
        Nazmul: Thank you.
        <br />
        Arafat: Dont mention it
        <br />
        <br />
        Answer:
        <br />
        Nazmul: Excuse me, where is the nearest hospital?
        <br />
        Arafa: It's about 2 kilometres from here. You will have to hire a taxi.
        You can also go by bus.
        <br />
        Nazmul: I see. Is there a bus station near here?
        <br />
        Arafat: Yes, there is a bus stop at the corner.
        <br />
        Nazmul: Thank you. Arafat. Don't mention it.
        <br />
        <br />
        5. Use capitals and punctuation marks where necessary in the following
        texts. [Chattogram Board-2016]
        <br />
        “Good Morning where are you going” said the merchant. I was just coming
        to see you said the youth. “What do you want” “Please help me to earn my
        bread by the labour of my hands. “Do you really want work!” said the
        merchant. yes if you have any.” “Then follow me and carry the box from
        the shop to my house.” “By Allah I’m really grateful to you.” said the
        youth.
        <br />
        <br />
        Answer: "Good Morning. Where are you going?" said the merchant. "I was
        just coming to see you," said the youth. "What do you want?" "Please
        help me to earn my bread by the labour of my hands." "Do you really want
        work?" said the merchant." "Yes, if you have any.â€ "Then follow me and
        carry the box from the shop to my house." "By Allah, I'm really grateful
        to you, said the youth.
        <br />
        <br />
        6. Use capitals and punctuation marks where necessary in the following
        texts. [Barishal Board-2016]
        <br />
        Student: May I come in Sir?
        <br />
        Principal: Yes come in
        <br />
        Student: Good morning Sir
        <br />
        Principal: Good morning how can I help you
        <br />
        Student: Sir we would like to arrange a study tour
        <br />
        Principal: It’s a great idea Ill appreciate it Submit an application to
        me so that I can take a step in favour of you.
        <br />
        Student: Ok Sir. We will write an application on behalf of the students
        <br />
        Principal: Ok, see you
        <br />
        Student: Thank you very much, Sir
        <br />
        Principal: You are most welcome
        <br />
        <br />
        Answer:
        <br />
        Student: May! come in, Sir?
        <br />
        Principal: Yes, come in.
        <br />
        Student: Good morning. Sir.
        <br />
        Principal: Good morning. How can I help you?
        <br />
        Student: Sir, we would like to arrange a study tour.
        <br />
        Principal: It's a great idea. I'll appreciate it. Submit an application
        to me so that I can take a step in favour of you.
        <br />
        Student : Ok. Sir. We will write an application on behalf of the
        students.
        <br />
        Principal: Ok, see you,
        <br />
        Student: Thank you very much, Sir.
        <br />
        Principal: You are most welcome.
      </div>

      
    </div>
  );
}

export default Beginner;
