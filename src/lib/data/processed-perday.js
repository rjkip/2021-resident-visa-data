const data = `
 Sun, May 22                              18                     28                        .                  .                       .
 Sat, May 21                              14                     34                        .                  .                       .
 Fri, May 20                             151                    376                     72                  186                       .
 Thu, May 19                             140                    357                     74                  173                       1
 Wed, May 18                             136                    311                    150                  334                       .
 Tue, May 17                             144                    349                     45                   97                       1
 Mon, May 16                             165                    398                    166                  367                       .
 Sun, May 15                              58                    139                        .                  .                       .
 Sat, May 14                              64                    143                        .                  .                       .
 Fri, May 13                             155                    381                     73                  191                       1
 Thu, May 12                             126                    283                    311                  711                       .
 Wed, May 11                             161                    406                    134                  400                       1
 Tue, May 10                             165                    391                    123                  354                       .
Mon, May 9    205   479   219    474    .
Sun, May 8    22    41      .       .   .
Sat, May 7    17    43      .       .   .
Fri, May 6    229   551   146    338    .
Thu, May 5    187   406   152    340    .
Wed, May 4    203   445   197    438    .
Tue, May 3    176   430   111    249    .
Mon, May 2    183   483   276    665    1
Sun, May 1    71    166     .       .   .
Sat, Apr 30   76    172     .       .   .
Fri, Apr 29   209   492   195    457    .
Thu, Apr 28   218   517   168    403    .
Wed, Apr 27   208   481   86     239    .
Tue, Apr 26   180   410   389    960    1
Mon, Apr 25   129   318     .       .   .
Sun, Apr 24   73    179     .       .   .
Sat, Apr 23   77    200     .       .   .
Fri, Apr 22   171   430   222    515    1
Thu, Apr 21   250   591   275    630    .
Wed, Apr 20   316   685   190    519    1
Tue, Apr 19   255   563   529   1,185   1
Mon, Apr 18     97     208      .       .   .
Sun, Apr 17     69     163      .       .   .
Sat, Apr 16     57     116      .       .   .
Fri, Apr 15     92     207      .       .   .
Thu, Apr 14    280     631    303    679    1
Wed, Apr 13    308     688    314    689    1
Tue, Apr 12    268     626    110    257    .
Mon, Apr 11    323     765    504   1,099   .
Sun, Apr 10     11      33      .       .   .
Sat, Apr 9      74     166      .       .   .
Fri, Apr 8     376     910    364    803    .
Thu, Apr 7     393     904    385    848    1
Wed, Apr 6     387     942    369    812    .
Tue, Apr 5     337     785    233    494    .
Mon, Apr 4     353     849    527   1,071   1
Sun, Apr 3     165     372      .       .   .
Sat, Apr 2     153     364      .       .   .
Fri, Apr 1     519    1,185   336    668    .
Thu, Mar 31   1,164   2,503   451    921    .
Wed, Mar 30    534    1,056   285    612    .
Tue, Mar 29    355     815    132    301    .
Mon, Mar 28    796    1,750   523   1,106   .
Sun, Mar 27    350     734      .       .   .
Sat, Mar 26    326     702      .       .   .
Fri, Mar 25    785    1,818   272    579    .
Thu, Mar 24    826    1,890   336    678    1
Wed, Mar 23    806    1,673   247    523    1
Tue, Mar 22    862    1,935   454    948    .
Mon, Mar 21    899    1,950   273    642    1
Sun, Mar 20    431     946      .       .   .
Sat, Mar 19    417     911      .       .   .
Fri, Mar 18    914    2,072   52     155    .
Thu, Mar 17   1,097   2,394   251    555    .
Wed, Mar 16   1,207   2,593   227    479    .
Tue, Mar 15   1,324   2,764   58     191    .
Mon, Mar 14   1,270   2,698   337    714    .
Sun, Mar 13    682    1,372     .       .   .
Sat, Mar 12    858    1,826     .       .   .
Fri, Mar 11   1,714   3,561   259    576    .
Thu, Mar 10   2,088   4,181   243    495    .
Wed, Mar 9    2,308   4,609   70     168    .
Tue, Mar 8    2,542   4,985   44     141    .
Mon, Mar 7     2,992    5,891   145    435    .
Sun, Mar 6     1,667    3,225     .       .   .
Sat, Mar 5     2,293    4,324     .       .   .
Fri, Mar 4     4,227    8,009   206    480    .
Thu, Mar 3     5,467    9,930   236    594    .
Wed, Mar 2     8,409   14,791   61     179    1
Tue, Mar 1    18,372   29,325   56     217    1
Mon, Feb 28    1,256    2,611   166    421    .
Sun, Feb 27    1,112    2,239     .       .   .
Sat, Feb 26     942     1,871     .       .   .
Fri, Feb 25    1,139    2,433   314    772    .
Thu, Feb 24    1,059    2,260   918   2,455   .
Wed, Feb 23     755     1,608   404   1,046   .
Tue, Feb 22     690     1,552   97     256    .
Mon, Feb 21     443      917    420   1,092   .
Sun, Feb 20      10       23      .       .   .
Sat, Feb 19      12       32      .       .   .
Fri, Feb 18      31       85    556   1,266   .
Thu, Feb 17      35      108    41      89    .
Wed, Feb 16      36      100    80     202    .
Tue, Feb 15      32       86    109    283    .
Mon, Feb 14   23   55    144   344   .
Sun, Feb 13   11   23      .     .   .
Sat, Feb 12   7    16      .     .   .
Fri, Feb 11   33   96    73    228   .
Thu, Feb 10   27   76    89    211   .
Wed, Feb 9    48   131   116   260   .
Tue, Feb 8    41   104   292   673   .
Mon, Feb 7    14   34      .     .   .
Sun, Feb 6    9    13      .     .   .
Sat, Feb 5    8    21      .     .   .
Fri, Feb 4    34   101   180   388   .
Thu, Feb 3    42   106   166   388   .
Wed, Feb 2    38   89    86    178   .
Tue, Feb 1    30   73    220   472   .
Mon, Jan 31   18   46      .     .   .
Sun, Jan 30   9    21      .     .   .
Sat, Jan 29   16   37      .     .   .
Fri, Jan 28   24   66    219   491   .
Thu, Jan 27   28   78    311   647   .
Wed, Jan 26   43   103   279   606   .
Tue, Jan 25   51   141   244   513   .
Mon, Jan 24   23   58    202   418   .
Sun, Jan 23   7    20    250   557   .
Sat, Jan 22   19   63      .     .   .
Fri, Jan 21   38   96    147   317   .
Thu, Jan 20   39   110   232   482   .
Wed, Jan 19   50   139   213   462   .
Tue, Jan 18   41   104   107   186   .
Mon, Jan 17   35   86    165   340   2
Sun, Jan 16   15   43    105   229   .
Sat, Jan 15   18   43      .     .   .
Fri, Jan 14   46   135   131   256   .
Thu, Jan 13   49   137   200   449   .
Wed, Jan 12   34   86    155   303   .
Tue, Jan 11   51   122   163   354   .
Mon, Jan 10   47   125   139   300   .
Sun, Jan 9    12   32      .     .   .
Sat, Jan 8    17   40      .     .   .
Fri, Jan 7    23   49    133   282   .
Thu, Jan 6    33   84    45    84    .
Wed, Jan 5    29   79    34    68    .
Tue, Jan 4    12   38      .     .   .
Mon, Jan 3     7    14      .     .   .
Sun, Jan 2     9    26      .     .   .
Sat, Jan 1    10    24      .     .   .
Fri, Dec 31   14    36    31    74    .
Thu, Dec 30   31    85    44    88    .
Wed, Dec 29   22    64    85    198   .
Tue, Dec 28   21    64      .     .   .
Mon, Dec 27   18    39      .     .   .
Sun, Dec 26    9    21      .     .   .
Sat, Dec 25   15    44      .     .   .
Fri, Dec 24   61    168   100   188   .
Thu, Dec 23   92    237   99    179   .
Wed, Dec 22   103   255   96    176   .
Tue, Dec 21   105   262   68    140   .
Mon, Dec 20   88    220    9    19    .
Sun, Dec 19   58    163   124   227   .
Sat, Dec 18   50    148     .     .   .
Fri, Dec 17   113   294   56    108   .
Thu, Dec 16   158   424   130   224   .
Wed, Dec 15   156   397   30    36    .
Tue, Dec 14   143   393   21    32    .
Mon, Dec 13                160                     442                      10        16   .
Sun, Dec 12                 91                     260                       3        3    .
Sat, Dec 11                111                     297                       6        7    .
Fri, Dec 10                221                     574                      14        23   .
Thu, Dec 9                 319                     852                       7        9    .
Wed, Dec 8                 382                   1,030                      16        18   .
Tue, Dec 7                 492                   1,303                      10        16   .
Mon, Dec 6                 810                   2,006                       1        1    .
Sun, Dec 5                 574                   1,412                        .        .   .
Sat, Dec 4               1,544                   3,825                        .        .   .
Fri, Dec 3               2,167                   4,972                        .        .   .
Thu, Dec 2               2,496                   5,425                        .        .   .
Wed, Dec 1               1,357                   2,832                        .        .   .
`;

function localIsoDate(month, day) {
  // FIXME: Latent bug for December 2022
  const date = new Date(`${month} ${day}, ${month === 'Dec' ? 2021 : 2022}`);

  return date;
}

export const processedPerDay = data
  .trim()
  .replace(/^\s*\w+, /gm, '')
  .replace(/,/g, '')
  .replace(/\./g, '0')
  .split('\n')
  .map((it) => it.trim().split(/\s+/))
  .map(
    ([
      month,
      day,
      receivedApplications,
      receivedPeople,
      approvedApplications,
      approvedPeople,
      declinedApplications,
    ]) => ({
      date: localIsoDate(month, day),
      receivedApplications: parseInt(receivedApplications, 10),
      receivedPeople: parseInt(receivedPeople, 10),
      approvedApplications: parseInt(approvedApplications, 10),
      approvedPeople: parseInt(approvedPeople, 10),
      declinedApplications: parseInt(declinedApplications, 10),
    }),
  )
  .sort((a, b) => (a.date > b.date ? 1 : -1))
  .reduce((acc, currentValue, currentIndex, array) => {
    const previousValue = acc[acc.length - 1] || {};
    const receivedApplicationsCumulative =
      (previousValue.receivedApplicationsCumulative || 0) + currentValue.receivedApplications;
    const receivedPeopleCumulative =
      (previousValue.receivedPeopleCumulative || 0) + currentValue.receivedPeople;
    const approvedApplicationsCumulative =
      (previousValue.approvedApplicationsCumulative || 0) + currentValue.approvedApplications;
    const approvedPeopleCumulative =
      (previousValue.approvedPeopleCumulative || 0) + currentValue.approvedPeople;
    const declinedApplicationsCumulative =
      (previousValue.declinedApplicationsCumulative || 0) + currentValue.declinedApplications;
    const newValue = {
      date: currentValue.date,
      receivedApplicationsCumulative,
      receivedPeopleCumulative,
      approvedApplicationsCumulative,
      approvedPeopleCumulative,
      declinedApplicationsCumulative,
    };
    return [...acc, newValue];
  }, []);
