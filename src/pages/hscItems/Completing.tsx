// import { Button } from "flowbite-react";

function Completing() {
  const col2 = [
    "Since",
    "It is high time",
    "Lest",
    "Had",
    "So that",
    "If",
    "When",
    "While",
    "With a view to",
    "Whenever",
  ];
  const col3 = [
    "Though",
    "While",
    "Too……to",
    "As though",
    "That",
    "I wish",
    "Unless",
    "Where",
    "No sooner had",
  ];
  const col4 = [
    "Hardly had",
    "As if",
    "Let alone",
    "I had better",
    "Because of",
  ];

  return (
    <div className="h-full md:w-[85%] mx-auto px-5">
      <div className="">
        <div className="relative text-9xl italic text-green-400">
          <p>C</p>
        </div>
        <div className="absolute top-28 md:top-32 left-16 md:left-40 lg:left-48">
          <h1 className="text-xl font-bold italic text-green-500">
            ompleting Sentence
          </h1>
        </div>
      </div>

      <div className="">
        <p className="">
          Completing Sentence পরীক্ষায় আসে Oucation No-4 এ, শূন্যস্থান থাকে ১০
          টি, মার্কস-5. এই গুলিকে 5 out of 5 পাওয়ার জন্য নিচের রুলস গুল্যে পড়লেই
          যথেষ্ট। প্রত্যেকটা লাইনের অর্থ বুঝে উত্তর করার চেষ্টা করবে। বিগত বছরের
          board question Practice এর কোন বিকল্প নেই।
        </p>
        <div className="py-5">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-4xl text-pink-600">
                <th className="border px-1 py-1 lg:px-4 lg:py-2 text-center ">
                  ***
                </th>
                <th className="border px-1 py-1 lg:px-4 lg:py-2 text-center">
                  **
                </th>
                <th className="border px-1 py-1 lg:px-4 lg:py-2 text-center">
                  *
                </th>
              </tr>
            </thead>

            <tbody>
              {Array.from({
                length: Math.max(col4.length, col2.length, col3.length),
              }).map((_, i) => (
                <tr key={i}>
                  <td className="border px-1 py-1 lg:px-4 lg:py-2">
                    {col2[i] || ""}
                  </td>
                  <td className="border px-1 py-1 lg:px-4 lg:py-2">
                    {col3[i] || ""}
                  </td>
                  <td className="border px-1 py-1 lg:px-4 lg:py-2 ">
                    {col4[i] || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <!-- Rules --> */}
      <div className="">
        <h2 className="">Rules:</h2>
        {/*  */}
        <div className="pb-3">
          <h3 className="">
            1. after / before: <span className="animateText">***</span>
          </h3>
          <p>Q. He reached after............</p>
          <p>* He reached after he had / have/ has finished (reading the book/ the work).</p>
          <p>
            = He reached after <u> he had finished it</u> .
          </p>
          <p>
            = He had reached before <u> he finished it</u> . <br />
            (Note: before এর পরে had হবেনা)
          </p>
        </div>
        
        {/* 2 */}
        <div className="">
          <h3>2. Lest:</h3>
          <p>Q. He read diligently lest..................</p>
          <p>* He read diligently lest he might / should fail / miss (it).</p>
          <p>
            = He read diligently lest <u> he might miss it</u> .
          </p>
        </div>

        {/* 3 */}
        <div className="py-3">
          <h3 className="">
            3. It is time/ it is high
            time:<span className="animateText"> *** </span>
          </h3>
          <p>Q. It is high time .......</p>
          <p>
            = It is high time <u>we changed our habit</u> .
          </p>
        </div>

        {/* 4 */}
        <div className="">
          <h3>4. Who / whom / whose:</h3>
          <p>(i) He is a doctor (who)............</p>
          <p>* He is a doctor who is clever / honest / wants to be happy.</p>
          <p>
            = He is a doctor who <u>is clever</u> .
          </p>
          <p>(ii) He is a doctor whom _____ .</p>
          <p>
            = He is a doctor whom <u>I Know</u> .
          </p>
        </div>

        {/* 5 */}
        <div className="py-3">
          <h3>5. That / which:</h3>
          <p>(i) He said / thinks that..................</p>
          <p>
            * He said that it is / was favorite to him / it was beautiful to me/
            was essential to him.
          </p>
          <p>
            = He said that <u>it was essential to him</u> .
          </p>
          <p>(ii) This is the house which..................</p>
          <p>
            * This is the house that / which is small / favorite to me /
            beautiful to me.
          </p>
          <p>
            = This is the house which <u> was essential to him</u> .
          </p>
        </div>

        {/* 6 */}
        <div className="">
          <h3>6. When / where:</h3>
          <p>(i) Saturday is the day (when)............</p>
          <p>* Saturday is the day when he was born / I went there.</p>
          <p>= Saturday is the day when I went there.</p>
          <p>(ii) It is Rajshahi where .......... .</p>
          <p>= It is Rajshahi where he was born / I went last year.</p>
        </div>

        {/* 7 */}
        <div className="py-3">
          <h3>7. Without / By + V1-ing:</h3>
          <p>* Without writing much, ........</p>
          <p>= Without writing much, you cannot hope (to attain) it.</p>
          <p>(ii) By eating balance diet..................</p>
          <p>= By eating balance diet you can hope (to attain) it.</p>
        </div>

        {/* 8 */}
        <div className="">
          <h3 className="">
            <span className="animateText">*** </span> 8. If:
          </h3>
          <p>(i) if he comes,..................</p>
          <p>= if he comes. I will do it.</p>
          <p>(ii) if he came..................</p>
          <p>* if he came, I would/could/might do it.</p>
          <p>= if he came, I would do it.</p>
          <p>(iii) If he had come.............</p>
          <p>* if he had come, He have/could have/ might have done it .</p>
          <p>= if he had come, He would have done it .</p>
          <p>(iv) Had he come..............</p>
          <p>* Had he come, He would have/could have/ might have done it .</p>
          <p>= Had he come, He would have done it .</p>
        </div>
        {/* 9 */}
        <div className="py-3">
          <h3>9. as if/ as though:</h3>
          <p>Q. He tells the matter as though..........</p>
          <p>= He tells the matter as though he were leader.</p>
          <p>Q. He told the matter as though..........</p>
          <p>= He told the matter as though he had been leader.</p>
        </div>
        {/* 10 */}
        <div className="">
          <h3>10. It is time to/ it is time for....</h3>
          <p>= It is time to start the work.</p>
          <p>= It is time for us to start the work.</p>
        </div>
        {/* 11 */}
        <div className="py-3">
          <h3>11. (i) No sooner/ Hardly/ Scarcely:</h3>
          <p>(i) No sooner had ....... than.....:</p>
          <p>= No sooner had he gone out than he came.</p>
          <p>(ii) Scarcely had.... when/before.....</p>
          <p>= Scarcely had he gone out when he came.</p>
          <p>(iii) Hardly had he gone out when/before ........</p>
          <p>(iii) Hardly had he gone out when/before he came.</p>
        </div>
        {/* 12 */}
        <div className="">
          <h3>12. until / till:</h3>
          <p>Q. I will stay here until/ till...........</p>
          <p>= I will stay here until he comes back.</p>
        </div>
        {/* 13 */}
        <div className="py-3">
          <h3>13. Unless:</h3>
          <p>(i) Unless you read attentively,.........</p>
          <p>= Unless you read attentively, you will fail.</p>
          <p>(ii) You may fail unless..........</p>
          <p>= You may fail unless you work hard.</p>
        </div>
        {/* 14 */}
        <div className="">
          <h3>14. Too ... to:</h3>
          <p>Q. you are too short to...</p>
          <p>= You are too short to imagine.</p>
        </div>
        {/* 15 */}
        <div className="py-3">
          <h3 className="">
            15. So that/in order that/provided that:
            <span className="animateText"> ***</span>
          </h3>
          <p>Q. He went to the market so that........</p>
          <p>* He went to the market so that he can / could do the work.</p>
          <p>= He went to the market so that he could develop the work.</p>
        </div>
        {/* 16 */}
        <div className="">
          <h3>
            16. So ..... that: <span className="animateText"> *** </span>
          </h3>
          <p>Q. He is so interesting (that)...</p>
          <p>* He is so interesting that we cannot / couldn’t imagine.</p>
          <p>= He is so interesting that we cannot imagine.</p>
        </div>
        {/* 17 */}
        <div className="py-3">
          <h3>17. Because of, Due to, owing to:</h3>
          <p>Q. Due to fog, ..........</p>
          <p>= Due to fog, he could not attend the meeting.</p>
          <p>Q. he could not go to college because of ..........</p>
          <p>
            = he could not go to college because of poverty/ illness/ shortage
            of money.
          </p>
          <p>= he could not go to college because of illness.</p>
        </div>
        {/* 18 */}
        <div className="py-">
          <h3>18. Because:</h3>
          <p>Q. they do not eat right food because...</p>
          <p>= They do not eat right food because they do not understand.</p>
          <p>Q. they do not eat right food because...</p>
          <p>= They eat right food because it is helpful.</p>
        </div>

        {/* 19 */}
        <div className="py-3">
          <h3>19. despite of, in spite of:</h3>
          <p>= Despite of his being honest, .......... .</p>
          <p>= Despite of his being honest, he was punished.</p>
        </div>

        {/* 20 */}
        <div className="">
          <h3>20. had better / had rather / would rather / better:</h3>
          <p>(i) He had better.........</p>
          <p>= He had better read now.</p>
          <p>(ii) I would rather / better.......</p>
          <p>= I would rather read than do this.</p>
        </div>

        {/* 21 */}
        <div className="py-3">
          <h3>21. Would you mind?</h3>
          <p>Q. Would you mind ........ ?</p>
          <p> = Would you mind having a cup of tea?</p>
        </div>

        {/* 22 */}
        <div className="py-">
          <h3>22. To be:</h3>
          <p>Q. He is known to be...</p>
          <p>= He is known to be wise / innocent.</p>
        </div>

        {/* 23 */}
        <div className="py-3">
          <h3>23. In case:</h3>
          <p>Q. I took the pen in case............</p>
          <p>I took the pen in case he wants (ed).</p>
        </div>

        {/* 24 */}
        <div className="py-3">
          <h3>24. If:</h3>
          <p>(i) We will maintain good health if........</p>
          <p>
            = We will maintain good health if we do the work / he does the work.
          </p>
          <p>(ii) We could / would / might / make good result if........</p>
          <p>= We could make good result if we did this.</p>
          <p>
            (iii) We could have / would have / might have made good result if
            we...........
          </p>
          <p>= We could have made good result if we had done this.</p>
        </div>

        {/* 25 */}
        <div className="py-">
          <h3>25. Wish:</h3>
          <p>Q. I wish ....</p>
          <p>= I wish I were a king/ queen/ bird</p>
        </div>

        {/* 26 */}
        <div className="py-3">
          <h3 className="">
            26. Since<span className="animateText text-4xl"> ***</span>
          </h3>
          <p>Q. It is long since ........</p>
          <p>= It is long since we met.</p>
          <p>Q. It is long since ........</p>
          <p>= It was long since we had met</p>
          <p>Q. Since he is honest, ........</p>
          <p>= Since he is honest, we can think otherwise</p>
        </div>

        {/* 27 */}
        <div className="py-3">
          <h3>27. With a view to:</h3>
          <p>Q. He went to college with a view to ..........</p>
          <p>= He went to college with a view to solving the problem</p>
        </div>

        {/* 28 */}
        <div className="py-">
          <h3>28. while:</h3>
          <p>Q. We met him while ..........</p>
          <p>= We met him while walking on the road</p>
          <p>Q. We met him while we ..........</p>
          <p>= We met him while we were walking on the road</p>
        </div>

        {/* 29 */}
        <div className="py-3">
          <h3>
            29. Proverb/maxim:<span className="animateText"> ***</span>
          </h3>
          <p>Q. There is a proverb ..........</p>
          <p>= There is a proverb that time and tide wait for none</p>
          <p>Q. There goes a proverb ..........</p>
          <p>= There goes a proverb that time and tide wait for none</p>
        </div>

        {/* 30 */}
        <div className="">
          <h3>30. S + v + to:</h3>
          <p>Q. He wants to .........</p>
          <p>Q. He wants to go to home / read more</p>
        </div>
      </div>

      {/* <!-- Exercise --> */}
      <div className="pb-10">
        <h1>Exercise</h1>
        <p>1. He reached after..........</p>
        <p>3. He studied hard lest..........</p>
        <p>3. It is high time .........</p>
        <p>4. He is a doctor (who)..........</p>
        <p>5. He said that .................</p>
        <p>6. He read diligently lest ..........</p>
        <p>7. This is the house which..........</p>
        <p>8. Saturday is the day when..........</p>

        <p>9. He went home before ...........</p>
        <p>10. He is a doctor who ..........</p>
        <p>11. It is Rajshahi where .........</p>
        <p>13. Without writing much .........</p>
        <p>14. By eating balanced diet..........</p>
        <p>15. if he comes, .........</p>
        <p>16. if he came, ...........</p>
        <p>17. if he had come, ..........</p>
        <p>18. He tells the matter as though..........</p>
        <p>20. It is time to........</p>
        <p>22. No sooner had........ than........</p>
        <p>24. He will stay here until/ till........</p>
        <p>26. Unless you read attentively, ........</p>
        <p>27. You may fail unless........</p>
        <p>29. You are too short to........</p>
        <p>30. He went to the market so that............</p>
        <p>31. He is so interesting that.......</p>
        <p>32. Due to illness .........</p>
        <p>33. They do not eat right food because........</p>
        <p>34. They do not eat right food because .......</p>
        <p>35. Despite of being honest, ......</p>
        <p>36. He had better......</p>
        <p>37. I would rather/ better........</p>

        <p>39. Would you mind ..........?</p>
        <p>40. He is known to be........</p>
        <p>41. I took the pen in case........</p>
        <p>42. We will maintain health if........</p>
        <p>43. We could make good results if........</p>
        <p>44. We could have made good results if we........</p>
        <p>45. He works day and night in his land in order that........</p>
        <p>46. Rumi is a poor peasant who........</p>
        <p>47. They said/ think/ hope that........</p>
        <p>47. They replied that........</p>
        <p>48. He never wastes his time lest........</p>
        <p>49. As/ since I was weak in English........</p>
        <p>50. Since my exam was knocking at the door........</p>
        <p>51. As I am fond of train journeys........</p>
        <p>52. When Sumi received the phone........</p>
        <p>53. I went there by a taxi lest........</p>
        <p>54. Hardly had I heard the phone ringing........</p>
        <p>55. No sooner had I heard the news of his accident........</p>
        <p>56. But the traffic jam on the road was so acute that........</p>
        <p>57. He was admitted into a college which........</p>
        <p>
          58. But it was a matter of regret that the train had left
          before........
        </p>
        <p>59. Time does not come back in life if........</p>
        <p>60. Nobody can progress in life if........</p>
        <p>61. If we examine a man properly........</p>
        <p>62. If time had come........</p>
        <p>63. If they were educated........</p>
        <p>64. One must suffer in the long run if........</p>
        <p>65. Life may be full of problems if........</p>
        <p>66. Students asked the student if........</p>
        <p>67. Read till........</p>
        <p>68. He will be waiting until........</p>
        <p>69. You had better........</p>
        <p>70. Would you mind........</p>
        <p>71. I went to a tube well so that........</p>
        <p>72. London is a city where........</p>
        <p>73. 8 am is the time when........</p>
        <p>74. The steamer cannot start due to........</p>
        <p>75. He could not obtain A+ unless........</p>
        <p>76. Ruhi is so poor that........</p>
        <p>77. The student read so diligently in order that........</p>
        <p>78. It is high time........</p>
        <p>79. I went there while........</p>
        <p>80. If you have a sound body........</p>
        <p>81. By drinking clean water........</p>
        <p>82. Kamal's parents are poor but........</p>
        <p>83. Kamal had an accident while........</p>
        <p>84. Stop smoking lest........</p>
        <p>89. By using computer......</p>
        <p>90. Scarcely had we reached the station......</p>
        <p>91. Sadia behaves as if......</p>
        <p>92. In spite of her........</p>
        <p>93. The man is too old......</p>
        <p>94. Salma are too short......</p>
        <p>95. You are too silly......</p>
        <p>96. The lad is too heavy for me......</p>
        <p>97. The problem was too hard for them......</p>
        <p>98. Thy boy reads more so that......</p>
        <p>99. The lady flattered the writer so that......</p>
        <p>100. We eat food so that......</p>
        <p>101. The police sent the convict to jail so that......</p>
        <p>102. Many farmers are so poor that......</p>
        <p>103. The man was so ill that......</p>
        <p>104. Ruhi came to me yesterday in order that......</p>
        <p>105. Della went to hair shop in order that......</p>
        <p>106. He will shine in life provided that......</p>
        <p>107. He ran away lest......</p>
        <p>108. Unless you start once......</p>
        <p>109. The plan will take off in time providing......</p>
        <p>110. Come at 8 o'clock unless......</p>
        <p>111. The house owner treated the servant well lest......</p>
        <p>112. We shall start our journey tomorrow provided that......</p>
        <p>113. Since body and mind go together......</p>
        <p>114. Since there was drought......</p>
        <p>115. Wait here until......</p>
        <p>115. Wait here as long as......</p>
        <p>116. I would rather die......</p>
        <p>117. He would rather drink tea......</p>
        <p>118. It is time to......</p>
        <p>119. It is time they......</p>
        <p>120. She proceeded as though......</p>
        <p>121. The writer took a cabin which......</p>
        <p>122. Without taking physical exercise......</p>
        <p>123. He donates money as though......</p>
        <p>124. Sumi is my friend whose......</p>
        <p>125. He donates money as though......</p>
        <p>126. It is high time we......</p>
        <p>127. By eating rice and bread......</p>
        <p>128. If I had tried......</p>
        <p>129. Had I possessed vast property......</p>
        <p>130. Rupongi is a place where......</p>
        <p>131. You can go to sleep when......</p>
        <p>132. If they wanted......</p>
        <p>133. Saturday is the day......</p>
        <p>134. If you play in the rain......</p>
        <p>135. Munira will come tomorrow in case......</p>
        <p>137. You will return me the book which......</p>
        <p>138. A railway station is the place where......</p>
        <p>139. If I had a pen......</p>
        <p>140. He will carry an umbrella in case......</p>
        <p>141. Ruhi will swim after......</p>
        <p>142. Misti will go to London where......</p>
        <p>143. Had Munira wanted......</p>
        <p>144. Tuni wants to stay at home in case......</p>
        <p>145. If Bristi were a queen......</p>
        <p>146. Salma will return me the book after......</p>
        <p>147. Ten years have passed since......</p>
        <p>148. Though he is poor......</p>
        <p>149. There is a proverb/say that......</p>
        <p>150. If you are honest......</p>
        <p>151. As soon as I reached the station......</p>
        <p>152. Everybody likes him because......</p>
        <p>153. As he did not feel well......</p>
        <p>154. It was Friday when......</p>
        <p>155. Dr. Ahmed is a teacher whom......</p>
        <p>156. Socrates was wiser than......</p>
        <p>157. It is such a good idea that......</p>
        <p>158. It is easy to say but......</p>
        <p>159. It is love that......</p>
        <p>160. Your friend cannot help loving you if......</p>
        <p>161. He has a lot of money but......</p>
        <p>162. I came here with a view to......</p>
        <p>163. Bangladesh is a small country but......</p>
        <p>164. Read attentively or......</p>
        <p>165. Either you will play with me or......</p>
        <p>166. Ruhi does not read nor......</p>
        <p>167. Friendship is easy but......</p>
        <p>168. There are many other creations but......</p>
        <p>169. Neither will she dance nor......</p>
        <p>170. I had five cups of coffee and......</p>
        <p>171. By the time I left the coffee shop where......</p>
        <p>172. The last century is over but......</p>
        <p>173. Misti soured that......</p>
        <p>174. I prefer wearing clean and......</p>
        <p>175. There is a shying that......</p>
        <p>176. If we invest in education......</p>
        <p>177. Ruhi insisted that......</p>
        <p>178. People cut trees which/that......</p>
        <p>179. Leisure is the sweetest moment when......</p>
        <p>180. Munira says that......</p>
        <p>181. Sadia hankers after money and......</p>
        <p>182. There goes a proverb that......</p>
        <p>183. But Ruhi should remember that......</p>
      </div>
    </div>
  );
}

export default Completing;
