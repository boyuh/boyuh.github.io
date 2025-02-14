---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# About Me

<span class='anchor' id='about-me'></span>

Hi! I'm Boyu Han (韩博宇). Now I am a second-year PhD. student in <a href="https://vipl.ict.ac.cn/en/index.html" style="text-decoration: none;">VIPL</a> research group of <a href="http://english.ict.cas.cn/" style="text-decoration: none;">Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS)</a>, supervised by Prof. <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu (许倩倩)</a> (Professor at ICT, CAS) and <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang (黄庆明)</a> (IEEE Fellow). I have received the B.E. degree in the <a href="https://www.en.scse.uestc.edu.cn/" style="text-decoration: none;">SCSE</a> at the <a href="https://en.uestc.edu.cn/" style="text-decoration: none;">University of Electronic Science and Technology of China (UESTC)</a> in 2023. My research interests include machine learning and computer vision. If you are interested in my research, please email me at <a href="hanboyu23z@ict.ac.cn">hanboyu23z@ict.ac.cn</a>.

<!-- I am also lucky to have opportunities to collaborate with [Zhiyong Yang (杨智勇)](https://joshuaas.github.io/) (Assistant Professor at UCAS) and [Yangbangyan Jiang (姜阳邦彦)](https://jiangyangby.github.io/) (Postdoc at UCAS). -->

# 🔥 News
- *2024.09*: &nbsp;🎉🎉🎉 One paper accepted to <a href="https://neurips.cc/Conferences/2024" style="text-decoration: none;">NeurIPS 2024</a>, thanks to all co-authors!
- *2024.05*: &nbsp;🎉🎉🎉 One paper accepted to <a href="https://icml.cc/Conferences/2024" style="text-decoration: none;">ICML 2024</a>,  thanks to all co-authors!
- *2023.09*: &nbsp;🎉🎉🎉 Start my journey in <a href="https://vipl.ict.ac.cn/en/index.html" style="text-decoration: none;">VIPL</a> research group of <a href="http://english.ict.cas.cn/" style="text-decoration: none;">ICT, CAS</a>!!
- *2023.06*: &nbsp;🎉 Happy graduation from <a href="https://en.uestc.edu.cn/" style="text-decoration: none;">UESTC</a>!!
- *2023.06*: &nbsp;🎉 I have obtained the Outstanding Graduate of Sichuan Province and UESTC (四川省和电子科技大学优秀毕业生).
- *2022.12*: &nbsp;🎉 I have obtained the National Scholarship (国家奖学金) from the Ministry of Education of the People’s Republic of China.
- *2021.12*: &nbsp;🎉 I have obtained the Tencent First Prize Scholarship (腾讯一等学金) from the Tencent and UESTC.


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/NeurIPS2024_AUCSeg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>AUCSeg: AUC-oriented Pixel-level Long-tail Semantic Segmentation</font>**

**Boyu Han**, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://scholar.google.com/citations?user=Zk2XLWYAAAAJ&hl=zh-CN&oi=ao" style="text-decoration: none;">Peisong Wen</a>, <a href="https://jiangyangby.github.io/" style="text-decoration: none;">Yangbangyan Jiang</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

Advances in Neural Information Processing Systems (**NeurIPS**) 2024

[\[Paper\]](https://arxiv.org/abs/2409.20398) \| [\[Code\]](https://github.com/boyuh/AUCSeg) \| [\[Poster\]](https://neurips.cc/media/PosterPDFs/NeurIPS%202024/94250.png?t=1733470344.9781482) \| [\[Slides\]](https://neurips.cc/media/neurips-2024/Slides/94250.pdf) \| [\[Project\]](https://boyuh.github.io/Project_AUCSeg/)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/ICML2024_𝖣𝗂𝗋𝖬𝗂𝗑𝖤.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>Harnessing Hierarchical Label Distribution Variations in Test Agnostic Long-tail Recognition</font>**

<a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://wang22ti.com/" style="text-decoration: none;">Zitai Wang</a>, Sicong Li, **Boyu Han**, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://scst.sysu.edu.cn/members/caoxiaochun.htm" style="text-decoration: none;">Xiaochun Cao</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

International Conference on Machine Learning (**ICML**) 2024

[\[Paper\]](https://arxiv.org/abs/2405.07780) \| [\[Code\]](https://github.com/scongl/DirMixE) \| [\[Poster\]](https://icml.cc/media/PosterPDFs/ICML%202024/33489.png?t=1719404023.5924995) \| [\[Video\]](https://www.youtube.com/watch?v=oo2oFO0v_rM)
</div>
</div>

# 📖 Academic Services
Conferences
 - *NeurIPS*：PC Member (2024)
 - *ICLR*：PC Member (2025)
 - *ICML*：PC Member (2025)
 - *IJCAI*：PC Member (2025) 
 - *AISTATS*：PC Member (2025) 
 
Journals
 - *IEEE Transactions on Multimedia (T-MM)*: Reviewer
 - *ACM Transactions on Multimedia Computing, Communications and Applications (TOMM)*: Reviewer
 - *Multimedia Systems*: Reviewer
 
<!-- # 💬 Invited Talks & Presentations
- *2024.01*: &nbsp; TechBeat Talk of NeurIPS 2023. [\[Video\]](https://www.techbeat.net/talk-info?id=846).
- *2023.12*: &nbsp; AI TIME Talk of NeurIPS 2023. [\[Page\]](https://mp.weixin.qq.com/s/ur6aB8ojkmlhgtW-bIxLXw).
- *2023.12*: &nbsp; Young Scientists Conference of CSIG. [\[Poster\]](https://github.com/wang22ti/OpenAUC/blob/main/CSIG%20youth%20poster%20-%20OpenAUC.jpg).
- *2023.10*: &nbsp; PhD. student Forum of PRCV 2023. [\[Page\]](https://mp.weixin.qq.com/s/2mSlWBu7NYo88SjFD8Wn8Q).
- *2023.02*: &nbsp; AI TIME Youth PhD Talk of NeurIPS 2022. [\[Video\]](https://www.bilibili.com/video/BV1624y1G7un/?spm_id_from=333.999.0.0&vd_source=356f7336a633368638ff41a90a11197b). -->

# 🎖 Honors and Awards
- **Outstanding Graduate** of Sichuan Province(四川省优秀毕业生), 2023
- **Outstanding Graduate** of University of Electronic Science and Technology of China (电子科技大学优秀毕业生), 2023
- **National Scholarship** (国家奖学金), 2022
- **Tencent First Prize Scholarship** (腾讯一等学金), 2021
- **Three-time First-Class Annual Scholarship for Outstanding Students** by University of Electronic Science and Technology of China (电子科技大学一等优秀学生奖学金), 2020-2022
- **Outstanding Winner and AMS Award** in the American College Students Mathematical Modeling Contest (美国大学生数学建模竞赛O奖及AMS奖), 2021

# 🎓 Educations

<div class='school-box'>
<div><img src='images/UCAS.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2023.09 - now, Ph.D. Student.

Institute of Computing Technology, Chinese Academy of Sciences.

University of Chinese Academy of Sciences, Beijing.
</div>
</div>

<div class='school-box'>
<div><img src='images/UESTC.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2019.09 - 2023.06, Undergraduate.

School of Computer Science and Engineering (School of Cyber Security).

University of Electronic Science and Technology of China, Chengdu, Sichuan.
</div>
</div>


<!-- # 💻 Project

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">XCurve</div><img src='images/Xcurve.png' alt="sym" width="120%"></div></div>
<div class='paper-box-text' markdown="1">

*2020.02 - now*: &nbsp; **<font color='red'> As a core member, </font>** I participated in the development of [XCurve: Machine Learning with X-Curve Metrics](https://github.com/statusrank/XCurve). 

- XCurve focuses on **the design criteria of the objective function for ML tasks**, which can be formulated as a series of X-metric (say AUROC, AUPRC, AUTKC) optimization problems considering the **average performance of all decision thresholds** during the training phase. Welcome to try now and give us feedback!
</div>
</div> -->
