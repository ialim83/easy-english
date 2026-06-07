const StrongVerb = () => {
  const strongVerbsData = [
  {
    pattern: "i → a → u (The 'Sing' Pattern)",
    verbs: [
      { base: "begin", bengali: "শুরু করা", past: "began", participle: "begun" },
      { base: "drink", bengali: "পান করা", past: "drank", participle: "drunk" },
      { base: "ring", bengali: "ঘণ্টা বাজানো", past: "rang", participle: "rung" },
      { base: "shrink", bengali: "সংকুচিত হওয়া", past: "shrank", participle: "shrunked" },
      { base: "sing", bengali: "গান গাওয়া", past: "sang", participle: "sung" },
      { base: "sink", bengali: "ডুবে যাওয়া", past: "sank", participle: "sunk" },
      { base: "stink", bengali: "দুর্গন্ধ ছড়ানো", past: "stank", participle: "stunk" },
      { base: "swim", bengali: "সাঁতার কাটা", past: "swam", participle: "swum" },
    ]
  },
  {
    pattern: "i → o → o-en (The 'Drive' Pattern)",
    verbs: [
      { base: "drive", bengali: "চালানো", past: "drove", participle: "driven" },
      { base: "arise", bengali: "জেগে ওঠা / ঘটা", past: "arose", participle: "arisen" },
      { base: "ride", bengali: "আরোহণ করা", past: "rode", participle: "ridden" },
      { base: "rise", bengali: "ওঠা / উদিত হওয়া", past: "rose", participle: "risen" },
      { base: "smite", bengali: "আঘাত করা", past: "smote", participle: "smitten" },
      { base: "stride", bengali: "লম্বা পদক্ষেপে হাঁটা", past: "strode", participle: "stridden" },
      { base: "strive", bengali: "প্রচেষ্টা করা", past: "strove", participle: "striven" },
      { base: "write", bengali: "লেখা", past: "wrote", participle: "written" },
    ]
  },
  {
    pattern: "ow/ey → ew → own (The 'Blow' Pattern)",
    verbs: [
      { base: "blow", bengali: "বাতাস বওয়া / ফুঁ দেওয়া", past: "blew", participle: "blown" },
      { base: "fly", bengali: "ওড়া", past: "flew", participle: "flown" },
      { base: "grow", bengali: "জন্মানো / বৃদ্ধি পাওয়া", past: "grew", participle: "grown" },
      { base: "know", bengali: "জানা / চেনা", past: "knew", participle: "known" },
      { base: "throw", bengali: "নিক্ষেপ করা / ছুঁড়ে মারা", past: "threw", participle: "thrown" },
    ]
  },
  {
    pattern: "ea/a → o → o-en (The 'Break' Pattern)",
    verbs: [
      { base: "break", bengali: "ভাঙা", past: "broke", participle: "broken" },
      { base: "choose", bengali: "পছন্দ করা / নির্বাচন করা", past: "chose", participle: "chosen" },
      { base: "freeze", bengali: "জমে বরফ হওয়া", past: "froze", participle: "frozen" },
      { base: "speak", bengali: "কথা বলা", past: "spoke", participle: "spoken" },
      { base: "steal", bengali: "চুরি করা", past: "stole", participle: "stolen" },
      { base: "swear", font: "bold", bengali: "শপথ করা", past: "swore", participle: "sworn" },
      { base: "tear", bengali: "ছেঁড়া", past: "tore", participle: "torn" },
      { base: "wake", bengali: "জেগে ওঠা", past: "woke", participle: "woken" },
      { base: "wear", bengali: "পরিধান করা", past: "wore", participle: "worn" },
      { base: "weave", bengali: "বোনা (কাপড়)", past: "wove", participle: "woven" },
    ]
  },
  {
    pattern: "e/a → o → o (The 'Get' Pattern)",
    verbs: [
      { base: "get", bengali: "পাওয়া", past: "got", participle: "got / gotten" },
      { base: "forget", bengali: "ভুলে যাওয়া", past: "forgot", participle: "forgotten" },
      { base: "tread", bengali: "পদদলিত করা / হাঁটা", past: "trod", participle: "trodden" },
    ]
  },
  {
    pattern: "oo/ee → o → o (The 'Shoot' Pattern)",
    verbs: [
      { base: "shoot", bengali: "গুলি করা", past: "shot", participle: "shot" },
      { base: "bleed", bengali: "রক্তক্ষরণ হওয়া", past: "bled", participle: "bled" },
      { base: "feed", bengali: "খাওয়ানো", past: "fed", participle: "fed" },
      { base: "meet", bengali: "সাক্ষাৎ করা", past: "met", participle: "met" },
      { base: "lead", bengali: "পরিচালনা করা / নেতৃত্ব দেওয়া", past: "led", participle: "led" },
    ]
  },
  {
    pattern: "a → oo → a-en (The 'Take' Pattern)",
    verbs: [
      { base: "take", bengali: "নেওয়া", past: "took", participle: "taken" },
      { base: "forsake", bengali: "পরিত্যাগ করা", past: "forsook", participle: "forsaken" },
      { base: "shake", bengali: "ঝাঁকানো / কাঁপা", past: "shook", participle: "shaken" },
    ]
  },
  {
    pattern: "Miscellaneous Vowel Shifts (Irregular Strong Verbs)",
    verbs: [
      { base: "bite", bengali: "কামড়ানো", past: "bit", participle: "bitten" },
      { base: "come", bengali: "আসা", past: "came", participle: "come" },
      { base: "eat", bengali: "খাওয়া", past: "ate", participle: "eaten" },
      { base: "fall", bengali: "পড়ে যাওয়া", past: "fell", participle: "fallen" },
      { base: "forbid", bengali: "নিষেধ করা", past: "forbade", participle: "forbidden" },
      { base: "give", bengali: "দেওয়া", past: "gave", participle: "given" },
      { base: "hide", bengali: "লুকানো", past: "hid", participle: "hidden" },
      { base: "run", bengali: "দৌড়ানো", past: "ran", participle: "run" },
      { base: "see", bengali: "দেখা", past: "saw", participle: "seen" },
      { base: "slay", bengali: "হত্যা করা", past: "slew", participle: "slain" },
      { base: "spit", bengali: "থুতু ফেলা", past: "spat", participle: "spat" },
      { base: "strike", bengali: "আঘাত করা / ধর্মঘট করা", past: "struck", participle: "struck / stricken" },
    ]
  }
];
// Global counter track across all pattern categories
  let absoluteSerialNumber = 1;
  return (
    <div className="px-3 md:w-[65%] mx-auto">
      <div className="w-full mx-auto">
        <div className="py-20">
          <h1 className="text-center text-green-400">Strong Verbs</h1>
        </div>
        <div className="">
          <div className="pb-10 w-full overflow-x-auto">
            <table border={1} className="w-full table-auto">
              <tr>
                <th>Serial</th>
                <th>Present</th>
                <th>Past</th>
                <th>Participle</th>
              </tr>

              <tr>
                <td>1</td>
                <td>arise (উঠা)</td>
                <td>arose</td>
                <td>arisen</td>
              </tr>
              <tr>
                <td>2</td>
                <td>awake(জাগানো)</td>
                <td>awoke</td>
                <td>awoken</td>
              </tr>
              <tr>
                <td>3</td>
                <td>be/am/is/are(হওয়া/থাকা)</td>
                <td>was/were</td>
                <td>been</td>
              </tr>
              <tr>
                <td>4</td>
                <td>beat (পেটানো)</td>
                <td>beat</td>
                <td>beaten</td>
              </tr>
              <tr>
                <td>5</td>
                <td>become (হওয়া)</td>
                <td>became</td>
                <td>become</td>
              </tr>
              
              <tr>
                <td>6</td>
                <td>bear(জন্ম দেওয়া)</td>
                <td>bore</td>
                <td>born/borne</td>
              </tr>
              <tr>
                <td>7</td>
                <td>begin (শুরু করা)</td>
                <td>began</td>
                <td>begun</td>
              </tr>
              <tr>
                <td>8</td>
                <td>bid (নির্দেশ দেওয়া)</td>
                <td>bade/bid</td> 
                <td>bidden</td>
              </tr>
              <tr> 
                <td>8</td>
                <td>bite (কামড়ানো)</td>
                <td>bit</td> 
                <td>bitten</td>
              </tr>
              <tr>
                <td>9</td>
                <td>blow (প্রবাহিত হওয়া)</td>
                <td>blew</td>
                <td>blown</td>
              </tr>
              <tr>
                <td>10</td>
                <td>break (ভাঙা)</td>
                <td>broke</td>
                <td>broken</td>
              </tr>
              <tr>
                <td>11</td>
                <td>bring (নিয়ে আসা)</td>
                <td>brought</td>
                <td>brought</td>
              </tr>
              <tr>
                <td>12</td>
                <td>broadcast (প্রচার করা)</td>
                <td>broadcast</td>
                <td>broadcast</td>
              </tr>
              <tr>
                <td>13</td>
                <td>buy (ক্রয় করা)</td>
                <td>bought</td>
                <td>bought</td>
              </tr>

              <tr>
                <td>14</td>
                <td>catch (ধরা)</td>
                <td>caught</td>
                <td>caught</td>
              </tr>
              <tr>
                <td>15</td>
                <td>choose (বাছাই করা)</td>
                <td>chose</td>
                <td>chosen</td>
              </tr>
              <tr>
                <td>16</td>
                <td>come (আসা)</td>
                <td>came</td>
                <td>come</td>
              </tr>

              <tr>
                <td>17</td>
                <td>dig (খোঁড়া)</td>
                <td>dug</td>
                <td>dug</td>
              </tr>
              <tr>
                <td>18</td>
                <td>do (করা)</td>
                <td>did</td>
                <td>done</td>
              </tr>
              <tr>
                <td>19</td>
                <td>draw (আঁকা)</td>
                <td>drew</td>
                <td>drawn</td>
              </tr>
              <tr>
                <td>20</td>
                <td>drink (পান করা)</td>
                <td>drank</td>
                <td>drunk</td>
              </tr>
              <tr>
                <td>21</td>
                <td>drive (চালানো)</td>
                <td>drove</td>
                <td>driven</td>
              </tr>
              <tr>
                <td>22</td>
                <td>eat (খাওয়া)</td>
                <td>ate</td>
                <td>eaten</td>
              </tr>
              <tr>
                <td>23</td>
                <td>fall (পতন হওয়া)</td>
                <td>fell</td>
                <td>fallen</td>
              </tr>
              <tr>
                <td>24</td>
                <td>feed (খাওয়ানো)</td>
                <td>fed</td>
                <td>fed</td>
              </tr>
              <tr>
                <td>25</td>
                <td>feel (অনুভব করা)</td>
                <td>felt</td>
                <td>felt</td>
              </tr>
              <tr>
                <td>26</td>
                <td>fight (যুদ্ধ করা)</td>
                <td>fought</td>
                <td>fought</td>
              </tr>
              <tr>
                <td>27</td> 
                <td>find (পাওয়া)</td>
                <td>found</td>
                <td>found</td>
              </tr>
              <tr>
                <td>28</td>
                <td>flee (পালানো)</td>
                <td>fled</td>
                <td>fled</td>
              </tr>
              <tr>
                <td>29</td>
                <td>fly (উড়া)</td>
                <td>flew</td>
                <td>flown</td>
              </tr>
              <tr>
                <td>30</td>
                <td>forbid (নিষেধ করা)</td>
                <td>forbade</td>
                <td>forbidden</td>
              </tr>
              <tr>
                <td>31</td>
                <td>forget (ভুলে যাওয়া)</td>
                <td>forgot</td>
                <td>forgotten</td>
              </tr>
              <tr>
                <td>32</td>
                <td>forgive (মাফ করা)</td>
                <td>forgave</td>
                <td>forgiven</td>
              </tr>
              <tr>
                <td>33</td>
                <td>freeze (জমা)</td>
                <td>froze</td>
                <td>frozen</td>
              </tr>
              <tr>
                <td>34</td>
                <td>give (দেওয়া)</td>
                <td>gave</td>
                <td>given</td>
              </tr>
              <tr>
                <td>35</td>
                <td>get (পাওয়া/ হওয়া)</td>
                <td>got</td>
                <td>got/gotten</td>
              </tr>
              <tr>
                <td>36</td>
                <td>go (যাওয়া)</td>
                <td>went</td>
                <td>gone</td>
              </tr>
              <tr>
                <td>37</td>
                <td>grow (বড় হওয়া)</td>
                <td>grew</td>
                <td>grown</td>
              </tr>
              <tr>
                <td>38</td>
                <td>have/has (থাকা)</td>
                <td>had</td>
                <td>had</td>
              </tr>
              <tr>
                <td>39</td>
                <td>hang(ফাসি দেওয়া)</td>
                <td>hanged</td>
                <td>hanged</td>
              </tr>
              <tr>
                <td>40</td>
                <td>hang (ঝুলানো)</td>
                <td>hung</td>
                <td>hung</td>
              </tr>
              
              <tr>
                <td>41</td>
                <td>hide (লুকানো)</td>
                <td>hid</td>
                <td>hidden</td>
              </tr>
              <tr>
                <td>42</td>
                <td>hold (ধরা)</td>
                <td>held</td>
                <td>held</td>
              </tr>
              <tr>
                <td>43</td>
                <td>keep (রাখা)</td>
                <td>kept</td>
                <td>kept</td>
              </tr>
              <tr>
                <td>44</td>
                <td>kneel (হামাগুড়ি দেওয়া)</td>
                <td>knelt</td>
                <td>knelt</td>
              </tr>
              <tr>
                <td>45</td>
                <td>know (জানা)</td>
                <td>knew</td>
                <td>known</td>
              </tr>
              <tr>
                <td>46</td>
                <td>lay (রাখা)</td>
                <td>laid</td>
                <td>laid</td>
              </tr>
              <tr>
                <td>47</td>
                <td>lead (নেতৃত্ব দেওয়া)</td>
                <td>led</td>
                <td>led</td>
              </tr>
              <tr>
                <td>48</td>
                <td>leave (ত্যাগ করা)</td>
                <td>left</td>
                <td>left</td>
              </tr>
              
              <tr>
                <td>49</td>
                <td>lie (শুয়ে থাকা)</td>
                <td>lay</td>
                <td>lain</td>
              </tr>
              <tr>
                <td>50</td>
                <td>lose (হারানো)</td>
                <td>lost</td>
                <td>lost</td>
              </tr>
             
              <tr>
                <td>51</td>
                <td>meet (মিলিত হওয়া)</td>
                <td>met</td>
                <td>met</td>
              </tr>
              <tr>
                <td>52</td>
                <td>mistake (ভুল করা)</td>
                <td>mistook</td>
                <td>mistaken</td>
              </tr>
              <tr>
                <td>53</td>
                <td>pay (দেওয়া)</td>
                <td>paid</td>
                <td>paid</td>
              </tr>

              <tr>
                <td>54</td>
                <td>ride (চালানো)</td>
                <td>rode</td>
                <td>ridden</td>
              </tr>
              <tr>
                <td>55</td>
                <td>rise (উঠা)</td>
                <td>rose</td>
                <td>risen</td>
              </tr>
              <tr>
                <td>56</td>
                <td>run (দৌড়ানো)</td>
                <td>ran</td>
                <td>run</td>
              </tr>
              <tr>
                <td>57</td>
                <td>say (বলা)</td>
                <td>said</td>
                <td>said</td>
              </tr>
              <tr>
                <td>58</td>
                <td>see (দেখা)</td>
                <td>saw</td>
                <td>seen</td>
              </tr>
              <tr>
                <td>59</td>
                <td>seek (খোঁজা)</td>
                <td>sought</td>
                <td>sought</td>
              </tr>
              <tr>
                <td>60</td>
                <td>sell (বিক্রি করা)</td>
                <td>sold</td>
                <td>sold</td>
              </tr>

              <tr>
                <td>61</td>
                <td>sew (সেলাই করা)</td>
                <td>sewed</td>
                <td>sewn/sewed</td>
              </tr>
              <tr>
                <td>62</td>
                <td>shake (ঝাকানো)</td>
                <td>shook</td>
                <td>shaken</td>
              </tr>
              <tr>
                <td>63</td>
                <td>shine (কিরন দেওয়া)</td>
                <td>shone</td>
                <td>shone</td>
              </tr>
              <tr>
                <td>64</td>
                <td>shoot (গুলি করা)</td>
                <td>shot</td>
                <td>shot</td>
              </tr>
              <tr>
                <td>65</td>
                <td>show (দেখানো)</td>
                <td>showed</td>
                <td>shown/showed</td>
              </tr>
              <tr>
                <td>66</td>
                <td>shrink (সঙ্কুচিত হওয়া)</td>
                <td>shrank</td>
                <td>shrunk</td>
              </tr>
              
              <tr>
                <td>67</td>
                <td>strike (প্রহার করা)</td>
                <td>struck</td>
                <td>struck</td>
              </tr>
              <tr>
                <td>68</td>
                <td>swear (শপথ করা)</td>
                <td>swore</td>
                <td>sworn</td>
              </tr>
              <tr>
                <td>69</td>
                <td>swim (সাঁতার কাটা)</td>
                <td>swam</td>
                <td>swum</td>
              </tr>
              <tr>
                <td>70</td>
                <td>sing (গাওয়া)</td>
                <td>sang</td>
                <td>sung</td>
              </tr>
              <tr>
                <td>71</td>
                <td>sink (ডুবে যাওয়া)</td>
                <td>sank</td>
                <td>sunk</td>
              </tr>
              <tr>
                <td>72</td>
                <td>sit (বসা)</td>
                <td>sat</td>
                <td>sat</td>
              </tr>
              <tr>
                <td>73</td>
                <td>sleep (ঘুমানো)</td>
                <td>slept</td>
                <td>slept</td>
              </tr> 
              <tr>
                <td>73</td>
                <td>slay (হত্যা করা)</td>
                <td>slew</td>
                <td>slain</td>
              </tr>
              
              <tr>
                <td>74</td>
                <td>speak (কথা বলা)</td>
                <td>spoke</td>
                <td>spoken</td>
              </tr>
              <tr>
                <td>75</td>
                <td>spit (থুথু ফেলা)</td>
                <td>spat</td>
                <td>spat</td>
              </tr>

              <tr>
                <td>76</td>
                <td>spring(লাফানো)</td>
                <td>sprang</td>
                <td>sprung</td>
              </tr>
              <tr>
                <td>77</td>
                <td>stand(দাঁড়ানো)</td>
                <td>stood</td>
                <td>stood</td>
              </tr>
              <tr>
                <td>78</td>
                <td>steal(চুরি করা)</td>
                <td>stole</td>
                <td>stolen</td>
              </tr>
              <tr>
                <td>79</td>
                <td>stick(লেগে থাকা)</td>
                <td>stuck</td>
                <td>stuck</td>
              </tr>
              <tr>
                <td>80</td>
                <td>sting(হুল ফোটানো)</td>
                <td>stung</td>
                <td>stung</td>
              </tr>
              <tr>
                <td>81</td>
                <td>stink(পঁচা গন্ধ হওয়া)</td>
                <td>stank</td>
                <td>stunk</td>
              </tr>
              <tr>
                <td>82</td>
                <td>strike(প্রহার করা)</td>
                <td>struck</td>
                <td>struck</td>
              </tr>
              <tr>
                <td>83</td>
                <td>swear(শপথ করা)</td>
                <td>swore</td>
                <td>sworn</td>
              </tr>
              <tr>
                <td>84</td>
                <td>swing(দোলানো)</td>
                <td>swung</td>
                <td>swung</td>
              </tr>
              <tr>
                <td>85</td>
                <td>take(নেওয়া)</td>
                <td>took</td>
                <td>taken</td>
              </tr>
              <tr>
                <td>86</td>
                <td>teach(শেখানো)</td>
                <td>taught</td>
                <td>taught</td>
              </tr>
              <tr>
                <td>87</td>
                <td>tear (ছিঁড়া)</td>
                <td>tore</td>
                <td>torn</td>
              </tr>
              <tr>
                <td>88</td>
                <td>tell (বলা)</td>
                <td>told</td>
                <td>told</td>
              </tr>
              <tr>
                <td>89</td>
                <td>think (ভাবা)</td>
                <td>thought</td>
                <td>thought</td>
              </tr>
              <tr>
                <td>90</td>
                <td>throw (নিক্ষেপ করা)</td>
                <td>threw</td>
                <td>thrown</td>
              </tr>

              <tr>
                <td>91</td>
                <td>understand (বুঝতে পার)</td>
                <td>understood</td>
                <td>understood</td>
              </tr>

              
              <tr>
                <td>92</td>  
                <td>wake(জাগ্রত হওয়া)</td>
                <td>woke</td>
                <td>woken</td>
              </tr>
              <tr>
                <td>93</td>
                <td>wear(পরিধান করা)</td>
                <td>wore</td>
                <td>worn</td>
              </tr>
              <tr>
                <td>94</td>
                <td>weave(বোনা)</td>
                <td>wove</td>
                <td>woven</td> 
              </tr>
              <tr>
                <td>95</td>
                <td>weep (ক্রন্দন করা)</td>
                <td>wept</td>
                <td>wept</td>
              </tr>
              <tr>
                <td>96</td>
                <td>win (জয় করা)</td>
                <td>won</td>
                <td>won</td>
              </tr>
              <tr>
                <td>97</td>
                <td>write (লিখা)</td>
                <td>wrote</td>
                <td>written</td>
              </tr>
            </table>
          </div>

          <div className="pb-10 w-full overflow-x-auto">
            <h3 className="my-3">
              Note: কিছু Verb আছে যাদের Present, Past ও Past Participle একইরুপঃ
            </h3>
            <table border={1} className="w-full table-auto">
              <tr>
                <th>Serial</th>
                <th>Present</th>
                <th>Past</th>
                <th>Participle</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Bet(বাজি ধরা)</td>
                <td>bet</td>
                <td>bet</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Burst(ফেটে যাওয়া)</td>
                <td>burst</td>
                <td>burst</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cut(কাটা)</td>
                <td>cut</td>
                <td>cut</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Cast(নিক্ষেপ করা)</td>
                <td>cast</td>
                <td>cast</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Cost (খরচ করা)</td>
                <td>cost</td>
                <td>cost</td>
              </tr>

              <tr>
                <td>6</td>
                <td>Hit (আঘাত করা)</td>
                <td>hit</td>
                <td>hit</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Hurt (আঘাত করা)</td>
                <td>hurt</td>
                <td>hurt</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Let (দেওয়া)</td>
                <td>let</td>
                <td>let</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Put (রাখা)</td>
                <td>put</td>
                <td>put</td>
              </tr>

              <tr>
                <td>10</td>
                <td>Read (পড়া)</td>
                <td>read</td>
                <td>read</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Rid (মুক্ত করা)</td>
                <td>rid</td>
                <td>rid</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Split (বিদীর্ণ করা)</td>
                <td>split</td>
                <td>split</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Shut (বন্ধ করা)</td>
                <td>shut</td>
                <td>shut</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Set (স্থাপন করা)</td>
                <td>set</td>
                <td>set</td>
              </tr>

              <tr>
                <td>15</td>
                <td>quit (ছেড়ে দেওয়া)</td>
                <td>quit</td>
                <td>quit</td>
              </tr>
              <tr>
                <td>16</td>
                <td>spread(ছড়ানো)</td>
                <td>spread</td>
                <td>spread</td>
              </tr>
            </table>
          </div>
        </div>
        {/* pattern */}
        <div className="">
          <div className="w-full max-w-6xl mx-auto p-6 bg-slate-50 rounded-xl shadow-md my-8">
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          English Strong Verbs List (স্ট্রং ভার্ব তালিকা)
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Strong verbs form their past tense and past participle through an internal vowel change.
        </p>
      </div>

      <div className="space-y-8">
        {strongVerbsData.map((group, groupIndex) => (
          <div key={groupIndex} className="overflow-hidden border border-slate-200 rounded-lg shadow-sm bg-white">
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
              <h3 className="text-md font-bold text-slate-700 tracking-wide">
                Pattern: <span className="text-indigo-600">{group.pattern}</span>
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 uppercase text-xs font-semibold text-slate-500 tracking-wider">
                  <tr>
                    <th scope="col" className="px-4 py-3 w-16 text-center">S.N.</th>
                    <th scope="col" className="px-6 py-3">Base Form (V1)</th>
                    <th scope="col" className="px-6 py-3">Bengali Meaning</th>
                    <th scope="col" className="px-6 py-3">Simple Past (V2)</th>
                    <th scope="col" className="px-6 py-3">Past Participle (V3)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {group.verbs.map((verb, vIndex) => {
                    const currentSerialNumber = absoluteSerialNumber++;
                    return (
                      <tr 
                        key={vIndex} 
                        className="hover:bg-slate-50 transition-colors duration-150 ease-in-out odd:bg-white even:bg-slate-50/50"
                      >
                        <td className="px-4 py-4 text-center font-mono text-xs text-slate-400">
                          {currentSerialNumber}
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-900">
                          {verb.base}
                        </td>
                        <td className="px-6 py-4 font-normal text-slate-600 font-sans tracking-wide">
                          {verb.bengali}
                        </td>
                        <td className="px-6 py-4 font-medium text-indigo-600">
                          {verb.past}
                        </td>
                        <td className="px-6 py-4 font-medium text-emerald-600">
                          {verb.participle}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default StrongVerb;
