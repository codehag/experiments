## 1.Experimental Design and methods:

a) [Learning a Metric for Code Readability](http://web.eecs.umich.edu/~weimerw/p/weimer-tse2010-readability-preprint.pdf)

Summary: First large scale study of code readability, done on several Java codebases. Identifies a
set of features of source code that negatively/positively impact code readability. Is cited by paper
1b in order to identify structural aspects of code that could negatively or positively impact
developer cognative load.

Section of interest in this case is the discussion:
Page 12-13

"When designing programming languages, readabilityis an important concern. Languages might be designed toforce or encourage improved readability by consideringthe implications of various design and language featureson this metric. For example, Python enforces a specificindentation scheme in order to aid comprehension [29],[40]. In our experiments, the importance of charactercount per line suggests that languages should favor theuse of constructs, such as switch statements and pre-and post-increment, that encourage short lines. Our datasuggests that languages should add additional keywordsif it means that programs can be written with fewer newidentifiers.

[...]

"Finally, as language designers consider new languagefeatures, it might be useful to conduct studies of theimpact of such features on readability. The techniquespresented in this paper offer a framework for conductingsuch experiments."

They also identify models for readability that are applicable to code, that also work for other
types of text which is very neat.


b) [The Effect of Poor Source Code Lexicon and Readability on Developers’ Cognitive Load](http://veneraarnaoudova.ca/wp-content/uploads/2018/03/2018-ICPC-Effect-lexicon-cognitive-load.pdf)

Summary: Tries to identify three things, how eyetracking corresponds with self reporting of
cognitive load; how linguistic anti-patterns impact cognitive load; how structural aspects of the
code impact readability. Operates on same set of open source codebases as 1a.

What I found interesting here is that eye tracking studies are as effective as asking participants
to highlight areas that they consider to have a high cognitive load. Since eye tracking studies come
with the burden of potentially infringing privacy, this means that we can rely on asking
participants rather than using the more technologically heavy appraoch of eye tracking.

c) [Syntax, Predicates, Idioms — What Really Affects Code Complexity?](https://www.cs.huji.ac.il/~feit/papers/Complexity17ICPC.pdf)

Summary: very interesting comparison study about what impacts code complexity. They took a look at a
number of factors for example nesting depth of code, impact of for and if statements. They took the
approach of comparing the same subjects performance of compartive tasks, rather than having multiple
subjects to compare (which is similar to the idea here). They also used time analysis as part of
their calculations. Section of interest is VI. Experiment Execution, part C. This looks like a
reasonable approach, and since I am lacking knowledge in this area, I might replicate this in the
survey version.

### 2. Identifiers:

a) [To camel case or under_score](https://www.researchgate.net/publication/221219628_To_camelcase_or_under-score)

This paper takes a nice, small problem and applies eye tracking to great effect. It also uses a
different approach, one that does not require developers or code, but primarily looks into how
identifiers are interpreted by humans. Another interesting aspect of this study is how it shows how
training can impact performance on something as simple as quickly comprehending an identifier
written in a specific style. Interesting in a broad sense, but doesn't have as much impact on what I
am interested in studying

b) [Whats in a name? A study of identifiers](https://www.researchgate.net/publication/4242245_Whats_in_a_Name_A_Study_of_Identifiers)

This paper looks at identifiers as soul sources of information. When designing a programming
language we don't have the ability to annotate the programmers code for them, so working with
identifiers is all we can do. In the study 1a, it was noted that identifier length did not adversly
impact code comprehension. In other words, a program with identifiers that were 1 character long did
not adversly impact comprehension. However, the authors noted that they had not taken into
consideration the role that comments might play in this situation. This is a nice, contained study
that highlights the impact on comprehension based on identifier names.

Lots of interesting things to unpack in this one. first, the role that drop out rates played in the
test is very interesting. The experimental design might be to blame for this, as all figures were
shown to subjects in the same order, and subjects complained about fatigue. They also collected
confidence scores, which might be a good idea in my case as well. Finally, they tracked gender,
which I had not considered, and it had an impact on confidence scores very interestingly.

### 3. Projects:

a) [quorum](https://quorumlanguage.com/evidence.html)

This is a well known project lead, as far as I know, by Andreas Stefik of the University of Nevada.
Also involved is Antti-Juhani Kaijanaho, the person who did the phd dissertation "Evidenc-based
programming Language design" (see 5a). Also involved is Stefan Hanenberg of the University of
Duisburg-Essen, who has written about the cognative differences between typescript and javascript,
and has written quite extensively about the issues present in programming language design and its
lack of empirical evidence gathering based around decisions.

While I find quorum to be an interesting project, I feel like it is in part fueled by a political
situation going on in the programming language research community. I get this impression because of
the limited scope of programming language paradigms tested, and the apporach overall. There are
comments around this from other members of the community -- for example why lisps were completely
excluded. That having been said, JavaScript is within the same family as quorum and there is a lot
to be learned.

## 4. Papers on programmer comprehension:

a) [Stimulus Structures and Mental Representations in Expert Comprehension of Computer
Programs](http://www.cs.kent.edu/~jmaletic/cs69995-PC/papers/pennington87.pdf)

Very interesting historical study of how programmers comprehend COBOL. Establishes a very good
definition of what a mental model of a programming language is, but coming from the perspective of
text comprehension. This mental model is broken into two parts -- text structure knowledge -- which
involves the information in the code about which statements are to be executed and plan knowledge --
knowledge about the underlying patterns of a given program/language. This text is very dense and I
need to go through it again

b) [How do professional developers comprehend
software](https://memphis-cs.github.io/comp-7085-8085-2012-fall/papers/Roehm2012ICSE.pdf)

This paper looks to establish how programmers do their jobs. What does that actually look like, from
start to finish. This is interesting in that this does not put the programmer into an experimental
setting, but allows them to work as they normally do. The study identifies a number of emotional
reactions to code, such as anger towards cryptic naming, that might be lost if we do not have small
scale studies. It also identifies work place patterns, such as preference towards interpersonal
communication over documentation, and the importance of a rationale (!). I also generally like this
appraoch, because it comes to the developer in their natural environment, allowing them to react to
in the most natural way.

c) [On the positive effect of Reactive Programming on Software Comprehension: an Empirical
Study](http://www.guidosalvaneschi.com/attachments/papers/2017_On-the-Positive-Effect-of-Reactive-Programming-on-Software-Comprehension-An-Empirical-Study_pdf.pdf)

Reading this study felt like the researcher already had the conclusion in mind when they started the
research. The reason I get this impression is that they only tested reactive programming against the
observer pattern in object oriented programming, but their conclusion is that reactive programming
improves programmer comprehension without identifying that it only has evidence in relation to a
subset of object oriented programming practices. It is too large of a claim given their experiment.
The study is interesting for its references, they did a lot of reading into mental models and their
discussion of the different ways code is represented in programmers minds is interesting.

d) [An Empirical Investigation of the Effects of Type Systems and Code Completion on API Usability using TypeScript and JavaScript in MS Visual Studio](https://drive.google.com/file/d/0B5VfKG1fVepaTG41MlNTdWRQSDg/view)

This study is interesting to give context on Stefan Hanenberg's thinking and research methods, as
well as interesting as an example of a javascript / typescript comparison. Since these two are
closely related, and their specification is linked. However the study itself didn't make much sense
to me, as it was ultimately about api of VSCode usability and didn't need to have a comparison of those two
langauges.

## 5. Large scale studies / essays on the current status of empirical research in PL design:

a) [Evidence-Based Programming Language Design - A Philosophical and  Methodological
Exploration](https://jyx.jyu.fi/bitstream/handle/123456789/47698/978-951-39-6388-0_vaitos04122015.pdf)

This looks to be quite a significant work in collecting and identifying existing work in PL and
empirical data. I have dipped into it here and there, and it is interesting how little work has been
done, but I haven't managed to read the whole thing. It is rather dry.

b) [Methodological Irregularities in Programming-Language Research](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7999115)

More context on the folks working on Quorum. Written by Stefan Hanenberg and Andreas Stefik -- it
takes a pretty strong stance on the lack of empirical evidence when making decisions about
programming langauge apis. They bring up an interesting point about the cost of such migrations,
which is very real when considering the cost of changing something in a web api.
