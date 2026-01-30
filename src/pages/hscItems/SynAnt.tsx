import data from "../../synAnt.json";

const SynAnt = () => {
  return (
    <div className="px-5 md:w-[85%] mx-auto">
      <div className="py-20 text-center">
        <h1 className="">
          Synonyms <br /> & <br /> Antonyms
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-1 px-1 text-center">english</th>
              <th className="py-1 px-1 text-center">bangla</th>
              <th className="py-1 px-1 text-center">Synonyms</th>
              <th className="py-1 px-1 text-center">Antonyms</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.synAnt?.map((item, index) => (
              <tr key={index} className=" hover:bg-gray-100">
                <td className="py-1 px-1 text-center">{item.english}</td>
                <td className="py-1 px-1 text-center">{item.bangla}</td>
                <td className="py-1 px-1 text-center">{item.synonyms}</td>
                <td className="py-1 px-1 text-center">{item.antonyms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For hsc question */}
      <div className="pt-5 pb-10">
        <h3 className="">HSC Synonyms and Antonyms with Answer</h3>
        1. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        <br />
        Sports are a popular form of entertainment. Many international sporting
        events are organized from time to time. Most of the events are sponsored
        by multinational manufacturing companies and business firms. They pay
        for the sports events in exchange for the right to advertise their
        products during those events. These events are telecast worldwide by
        satellite and people all over the world watch them live. As a result,
        the sponsors’ products receive maximum media coverage giving companies
        international recognition. This is the only commercial aspect of
        international sport but there are other aspects too.
        <br />
        (a) popular (antonym) (b) form (synonym) (c) entertainment (synonym) (d)
        organize (synonym) (e) sponsor (synonym) (f) multinational (antonym) (g)
        pay (antonym) (h) watch (synonym) (i) maximum (antonym) (j) recognition
        (antonym) <br />
        <br />
        Answer: <br />
        (a) unpopular (b) kind/ type (c) recreation/ amusement (d) arrange (e)
        patronize (f) national/ domestic (g) receive/ take (h) see/ witness/
        enjoy (i) minimum (j) denial/ refusal
        <br />
        <br />
        2. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        The process of globalization obviously requires a common language for
        international communication. For many different reasons, English has
        achieved the prestige of being that language. As a result, it has
        crossed national borders to reach people who speak other languages. It
        is no longer the unique possession of British or American people, but a
        language that belongs to the world’s people. In fact, bilingual and
        multilingual users of English far outnumber its monolingual native
        speakers. This phenomenon has led to a bewildering variety of English
        around the world. As more and more people speak English, more and more
        varieties have emerged which are strongly influenced by the
        pronunciation, grammar and idioms of the respective mother-tongues.
        World English has now moved away from the control of the native
        speakers. However, the question of British or American English is not so
        important now. Today’s slogan is mutual intelligibility among users of
        the language. <br />
        (a) obviously (synonym) (b) prestige (synonym) (c) national (synonym)
        (d) unique (antonym) (e) native (antonym) (f) variety (synonym) (g)
        emerge (antonym) (h) control (antonym) (i) important (synonym) (j)
        intelligibility (antonym) <br />
        <br />
        Answer: <br />
        (a) certainly/ definitely/ surely/ undoubtedly/ apparently (b) honour/
        status (c) local/ domestic (d) common/ ordinary (e) foreign (f)
        diversity (g) disappear (h) freedom (i) significant (j)
        unintelligibility
        <br />
        <br />
        3. Read the passage and then write the antonym or synonym of the words
        as directed below. Sincerity is the root of success of all works. One
        can go a long way if he does a job with sincerity. The great men are
        sincere because they know that sincerity is the key to success. Those
        who do not follow the rules of sincerity can never go a long way.
        Sincerity is the secret of victory. If any work is not done with
        sincerity, one will never receive desirable output from it. So we should
        be sincere in every walk of life. <br />
        (a) success (antonym) (b) job (synonym) (c) great (antonym) (d) because
        (synonym) (e) know (synonym) (f) follow (antonym) (g) rule (synonym) (h)
        never (antonym) (i) victory (synonym) (j) desirable (antonym) <br />
        <br />
        Answer: <br />
        (a) failure (b) work/ service (c) ordinary/ common (d) since/ as (e)
        realize/ understand (f) disobey/ ignore (g) law/ regulation/ order (h)
        ever/ always (i) win/ triumph (j) undesirable
        <br />
        <br />
        4. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        There are many people who have a conservative outlook. Quite early in
        life they learn to believe that everything in this world was
        predetermined and all that happens to them was ordained by God. From
        this belief, the poor generally accept their poverty and all their
        sorrows and sufferings without trying much to overcome them. They also
        have the same sort of attitude towards illness and disease. <br />
        (a) people (synonym) (b) conservative (antonym) (c) early (antonym) (d)
        believe (synonym) (e) world (synonym) (f) all (antonym) (g) poverty
        (antonym) (h) sufferings (synonym) (i) overcome (synonym) (j) same
        (antonym)
        <br />
        <br />
        Answer: <br />
        (a) persons/ public (b) liberal (c) late (d) trust/ consider/ accept/
        think (e) globe/ earth (f) nothing/ none/ no (g) wealth/ affluence (h)
        affliction/ miseries/ distress (i) conquer/ succeed/ surpass (j)
        different
        <br />
        <br />
        5. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        During the nine month long Liberation War the Pakistani army carried out
        the most brutal massacre in human history. There were thousands of
        killing fields all around Bangladesh. One of the largest killing fields
        is located at Dumuria in Khulna. The area is called Chuknagar. Hundreds
        and thousands of fleeing people arrived at Chuknagar to cross the
        border. On 20 May 1971 Pakistani soldiers surrounded the area. They
        started to fire at the fleeing people. About eight to ten thousand
        people were killed at Chuknagar.
        <br />
        (a) liberation (synonym) (b) brutal (antonym) (c) massacre (synonym) (d)
        human (antonym) (e) located (antonym) (f) called (synonym) (g)
        surrounded (synonym) (h) started (antonym) (i) killed (synonym) (j)
        largest (antonym)
        <br />
        <br />
        Answer: <br />
        (a) freedom/ independence (b) humane/ kind/ gentle/ polite (c) genocide/
        holocaust (d) inhuman/ unkind (e) dislocated (f) named (g) encircled (h)
        finished/ stopped (i) assassinated/ murdered (j) smallest
        <br />
        <br />
        6. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        Bangladesh is an agro-based country. The soil of Bengal is purer than
        gold. Most of her land is fertile. The farmers of this country are
        industrious. They work ceaselessly from dawn to dusk. They are not lazy.
        They love their motherland. They have a strong attachment to their
        motherland. Their diligence and perseverance keep the wheel of economy
        moving. We must respect them. We are grateful to them. We must follow
        their devotion to duty and country. <br />
        (a) fertile (synonym) (b) industrious (antonym) (c) ceaselessly
        (synonym) (d) lazy (synonym) (e) love (antonym) (f) strong (synonym) (g)
        moving (antonym) (h) respect (synonym) (i) grateful (antonym) (j)
        devotion (synonym) <br />
        <br />
        Answer: <br />
        (a) alluvial/ productive (b) lazy/ idle (c) continuously (d) idle (e)
        hate (f) deep/ profound (g) unmoving/ fixed/ stagnant (h) honour (i)
        ungrateful (j) dedication/ loyalty
        <br />
        <br />
        7. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        All this was perplexing and upsetting. For at the time I had already
        made up my mind that imperialism was an evil thing and the sooner I
        chucked up my job and got out of it the better. Theoretically and
        secretly, of course I was all for the strugglers and against their
        oppressors. <br />
        (a) perplexing (antonym) (b) upsetting (antonym) (c) imperialism
        (synonym) (d) evil (antonym) (e) sooner (antonym) (f) chucked (synonym)
        (g) better (antonym) (h) Theoretically (synonym) (i) secretly (synonym)
        (j) oppressor (synonym)
        <br />
        <br />
        Answer: <br />
        (a) easy/ clear (b) comforting (c) colonialism (d) decent (e) later (f)
        discarded/ abandoned/ quitted (g) worse (h) hypothetically/ apparently
        (i) privately (j) tyrant/ autocrat
        <br />
        <br />
        8. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        Books are the unique medium through which we contact mighty minds of
        ages. Books tell us about their feelings what they said and what they
        did. Books are one of the greatest friends to us. They introduce us the
        best humanity, They are reliable records of the history. A book is a
        valuable living voice. We can know about the thoughts and rituals of
        pastmen through books. We should read good books and avoid worthless
        ones. A good book is a friend of loneliness and a nurse in ailment. We
        can find real happiness by reading good books. <br />
        (a) unique (antonym) (b) mighty (antonym) (c) humanity (synonym) (d)
        reliable (antonym) (e) valuable (antonym) (f) ritual (synonym) (g)
        worthless (synonym) (h) loneliness (synonym) (i) ailment (synonym) (j)
        happiness (antonym).
        <br />
        <br />
        Answer: <br />
        (a) common/ general/ simple (b) weak/ feeble/ frail/ powerless (c)
        morality/ benevolence/ generosity/ kindness (d) unreliable/ doubtful/
        untrustworthy (e) valueless/ worthless/ useless/ insignificent (f)
        ceremony/ convention/ tradition/ custom (g) valueless/ futile/
        meaningless/ useless (h) aloneness/ solitude/ solitariness/ desolation/
        isolation (i) disease/ malady/ illness/ sickness/ disorder (j)
        unhappiness/ sorrows/ miseries/ grief
        <br />
        <br />
        9. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        Books are men’s best friends in life. You may have many good friends but
        you do not find them when you need them. They may not always come to you
        with sympathy. Some may prove true or some may prove false and do you
        much harm. But books are always ready to be your side. Some books will
        make you laugh, some others will give you much pleasure. Again some
        books will bring new knowledge and ideas. They are ever friends
        throughout your life. <br />
        (a) friend (antonym) (b) need (antonym) (c) sympathy (synonym) (d) prove
        (synonym) (e) false (antonym) (f) harm (antonym) (g) laugh (antonym) (h)
        pleasure (synonym) (i) bring (synonym) (j) idea (synonym) <br />
        <br />
        Answer: <br />
        (a) foe/ enemy/ rival (b) avoid/ shun/ avert/ repel (c) kindness/
        empathy/ compassion (d) verify/ show/ test/ testify/ appear/ seem (e)
        true/ actual/ genuine/ real (f) help/ assist/ benefit (g) cry/ weep (h)
        delight/ joy/ enjoyment/ amusement (i) fetch/ get/ carry/ bear (j) view/
        concept/ design/ thought/ notion
        <br />
        <br />
        10. Read the passage and then write the antonym or synonym of the words
        as directed below. <br />
        After the flight of Yuri Gagarin, the first human being to travel to
        outer space in 1961, the Soviet Union decided to send a woman in space.
        Proletarian Valentina Tereshkova was selected for this project from
        among more than four hundred applicants. Since the successful launch of
        the spacecraft Vostok-5 on 14 June 1963, Tereshkova began preparing for
        her own flight. On 16 June 1963, she was dressed in space-suits and
        taken to the space shuttle launch pad by a bus. After completing her
        communication and life support checks, she was sealed inside Vostok-6.
        Finishing a two-hour countdown, Vostok-6 launched faultlessly. Although
        Tereshkova experienced nausea and physical discomfort for much of the
        flight, she orbited the earth 48 times and spent almost three days in
        space. She also maintained a flight log and took photographs of the
        horizon, which were later used to identify aerosol layers within the
        atmosphere. <br />
        (a) outer (antonym) (b) proletarian (synonym) (c) launch (synonym) (d)
        prepare (synonym) (e) began (antonym) (f) faultless (antonym) (g) nausea
        (synonym) (h) discomfort (antonym) (i) maintain (synonym) (j) later
        (antonym) <br />
        <br />
        Answer: <br />
        (a) inner/ inside (b) common/ ordinary/ poor (c) propulsion/ fling/ take
        off (d) ready (e) finished/ completed (f) flawed/ faulty/ defective (g)
        sickness/ vomiting/ dizziness (h) comfort (i) keep/ follow (j) earlier
      </div>
    </div>
  );
};
export default SynAnt;
