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

Hi! I'm Boyu Han (韩博宇). Now I am a third-year PhD. student in <a href="https://vipl.ict.ac.cn/en/index.html" style="text-decoration: none;">VIPL</a> research group of <a href="http://english.ict.cas.cn/" style="text-decoration: none;">Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS)</a>, supervised by Prof. <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu (许倩倩)</a> (Professor at ICT, CAS) and <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang (黄庆明)</a> (IEEE Fellow). I have received the B.E. degree in the <a href="https://www.en.scse.uestc.edu.cn/" style="text-decoration: none;">SCSE</a> at the <a href="https://en.uestc.edu.cn/" style="text-decoration: none;">University of Electronic Science and Technology of China (UESTC)</a> in 2023. My research interests include machine learning and computer vision, with a particular focus on long-tailed learning and the unified framework of generation and understanding. I have authored or co-authored several academic papers in top-tier international conferences and journals, including NeurIPS, ICML, and TPAMI. If you are interested in my research, please email me at <a href="hanboyu23z@ict.ac.cn">hanboyu23z@ict.ac.cn</a>.

<!-- I am also lucky to have opportunities to collaborate with [Zhiyong Yang (杨智勇)](https://joshuaas.github.io/) (Assistant Professor at UCAS) and [Yangbangyan Jiang (姜阳邦彦)](https://jiangyangby.github.io/) (Postdoc at UCAS). -->

# 🔥 News

- *2026.02*: &nbsp;🎉🎉🎉 One paper accepted to <a href="https://cvpr.thecvf.com/Conferences/2026" style="text-decoration: none;">CVPR 2026</a>, thanks to all co-authors!
- *2026.01*: &nbsp;🎉🎉🎉 I received the President of the Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS) Excellence Award!
- *2025.09*: &nbsp;🎉🎉🎉 One paper accepted to <a href="https://neurips.cc/Conferences/2025" style="text-decoration: none;">NeurIPS 2025</a>, thanks to all co-authors!
- *2025.09*: &nbsp;🎉 One paper accepted to TPAMI, thanks to all co-authors!
- *2025.07*: &nbsp;🎉 Our team won the <a href="https://sites.google.com/view/datacv-iccv25/papers" style="text-decoration: none;">1st place</a> in <a href="https://sites.google.com/view/datacv-iccv25/challenge" style="text-decoration: none;">ICCV 2025 Competition for High-Quality Face Dataset Generation (DataCV Challenge)</a>, with one paper accepted by ICCV 2025 workshop!
- *2025.06*: &nbsp;🎉 Our team (MR-CAS) won the <a href="https://www.codabench.org/competitions/2613/#/results-tab" style="text-decoration: none;">1st place</a> in <a href="https://egovis.github.io/cvpr25/" style="text-decoration: none;">CVPR 2025 Competition for Fine-grained Video Understanding (EgoVis HoloAssist Challenges, Mistake Detection Track)</a>!
- *2024.09*: &nbsp;🎉 One paper accepted to <a href="https://neurips.cc/Conferences/2024" style="text-decoration: none;">NeurIPS 2024</a>, thanks to all co-authors!
- *2024.05*: &nbsp;🎉 One paper accepted to <a href="https://icml.cc/Conferences/2024" style="text-decoration: none;">ICML 2024</a>,  thanks to all co-authors!
- *2023.09*: &nbsp;🎉 Start my journey in <a href="https://vipl.ict.ac.cn/en/index.html" style="text-decoration: none;">VIPL</a> research group of <a href="http://english.ict.cas.cn/" style="text-decoration: none;">ICT, CAS</a>!!
- *2023.06*: &nbsp;🎉 Happy graduation from <a href="https://en.uestc.edu.cn/" style="text-decoration: none;">UESTC</a>!!


# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/CVPR2026_DCR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>Guiding Diffusion-based Reconstruction with Contrastive Signals for Balanced Visual Representation</font>**

**Boyu Han**, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://github.com/421zuoduan" style="text-decoration: none;">Ruochen Cui</a>, Xilin Zhao, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

Conference on Computer Vision and Pattern Recognition (**CVPR**) 2026

<a href="https://arxiv.org/pdf/2603.04803"
   style="padding:4px 10px; border:1px solid #aaa; border-radius:4px; text-decoration:none; margin-right:6px; display:inline-block; width:10ch; text-align:center; box-sizing:border-box;">
   Paper
</a>
<a href="https://github.com/boyuh/DCR"
   style="padding:4px 10px; border:1px solid #aaa; border-radius:4px; text-decoration:none; display:inline-block; width:10ch; text-align:center; box-sizing:border-box;">
   Code
</a>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/NeurIPS2025_LightFair.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>LightFair: Towards an Efficient Alternative for Fair T2I Diffusion via Debiasing Pre-trained Text Encoders</font>**

**Boyu Han**, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://scholar.google.com/citations?user=JlmFymcAAAAJ&hl=zh-CN&oi=ao" style="text-decoration: none;">Kangli Zi</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

Advances in Neural Information Processing Systems (**NeurIPS**) 2025

[\[Paper\]](https://arxiv.org/pdf/2509.23639) \| [\[Code\]](https://github.com/boyuh/LightFair) \| [\[Poster\]](https://neurips.cc/media/PosterPDFs/NeurIPS%202025/115286.png?t=1764155161.3263206)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2025</div><img src='images/TPAMI_SISOD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>Towards Size-invariant Salient Object Detection: A Generic Evaluation and Optimization Approach</font>**

<a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://ferry-li.github.io/" style="text-decoration: none;">Feiran Li</a>, **Boyu Han**, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://scst.sysu.edu.cn/members/caoxiaochun.htm" style="text-decoration: none;">Xiaochun Cao</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

IEEE Transactions on Pattern Analysis and Machine Intelligence (**TPAMI**) 2025

[\[Paper\]](https://arxiv.org/pdf/2509.15573) \| [\[Code\]](https://github.com/Ferry-Li/SI-SOD)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025 workshop</div><img src='images/ICCV2025workshop_DataCV.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>Hybrid Generative Fusion for Efficient and Privacy-Preserving Face Recognition Dataset Generation</font>**

<a href="https://ferry-li.github.io/" style="text-decoration: none;">Feiran Li</a>, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, **Boyu Han**, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

International Conference on Computer Vision (**ICCV**) 2025 workshop **(Oral)**

[\[Paper\]](https://arxiv.org/pdf/2508.10672) \| [\[Code\]](https://github.com/Ferry-Li/datacv_fr)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/NeurIPS2024_AUCSeg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>AUCSeg: AUC-oriented Pixel-level Long-tail Semantic Segmentation</font>**

**Boyu Han**, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://kid-7391.github.io/" style="text-decoration: none;">Peisong Wen</a>, <a href="https://jiangyangby.github.io/" style="text-decoration: none;">Yangbangyan Jiang</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

Advances in Neural Information Processing Systems (**NeurIPS**) 2024

[\[Paper\]](https://arxiv.org/pdf/2409.20398) \| [\[Code\]](https://github.com/boyuh/AUCSeg) \| [\[Poster\]](https://neurips.cc/media/PosterPDFs/NeurIPS%202024/94250.png?t=1733470344.9781482) \| [\[Video\]](https://neurips.cc/virtual/2024/poster/94250) \| [\[Slides\]](https://neurips.cc/media/neurips-2024/Slides/94250.pdf) \| [\[Project\]](https://boyuh.github.io/project/AUCSeg/)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/ICML2024_𝖣𝗂𝗋𝖬𝗂𝗑𝖤.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>Harnessing Hierarchical Label Distribution Variations in Test Agnostic Long-tail Recognition</font>**

<a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://wang22ti.com/" style="text-decoration: none;">Zitai Wang</a>, Sicong Li, **Boyu Han**, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://scst.sysu.edu.cn/members/caoxiaochun.htm" style="text-decoration: none;">Xiaochun Cao</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

International Conference on Machine Learning (**ICML**) 2024

[\[Paper\]](https://arxiv.org/pdf/2405.07780) \| [\[Code\]](https://github.com/scongl/DirMixE) \| [\[Poster\]](https://icml.cc/media/PosterPDFs/ICML%202024/33489.png?t=1719404023.5924995) \| [\[Video\]](https://www.youtube.com/watch?v=oo2oFO0v_rM)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CJC'25</div><img src='images/CJC2025_RobustAUC.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**<font size=4>Efficient Adversarial Training for AUC Optimization</font>**

<a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a><sup>\*</sup>, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://huacong.github.io/" style="text-decoration: none;">Cong Hua</a>, **Boyu Han**, <a href="https://scst.sysu.edu.cn/members/caoxiaochun.htm" style="text-decoration: none;">Xiaochun Cao</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a><sup>\*</sup>

Chinese Journal of Computers (**CJC**) 2025

[\[Paper\]](http://cjc.ict.ac.cn/online/onlinepaper/bsl-202571282256.pdf)

- This paper presents a systematic investigation of a more generalized and efficient AdAUC framework, introducing a novel Ranking-aware Adversarial Regularization algorithm to achieve a better balance between standard and robust AUC performance.
</div>
</div>

# 🥇 Competitions

**<font size=4>DataCV Challenges @ ICCV 2025, 1st Place</font>**

Team: <a href="https://ferry-li.github.io/" style="text-decoration: none;">Feiran Li</a>, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, **Boyu Han**, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a>

[\[Website\]](https://sites.google.com/view/datacv-iccv25/challenge) \| [\[Leaderboard\]](https://sites.google.com/view/datacv-iccv25/papers) \| [\[Technical Report & Workshop Paper\]](https://arxiv.org/pdf/2508.10672)

- High-Quality Face Dataset Generation, Privacy Protection.

**<font size=4>EgoVis HoloAssist Challenges @ CVPR 2025, 1st Place</font>**

Team MR-CAS: **Boyu Han**, <a href="https://qianqianxu010.github.io/" style="text-decoration: none;">Qianqian Xu</a>, <a href="https://statusrank.github.io/" style="text-decoration: none;">Shilong Bao</a>, <a href="https://joshuaas.github.io/" style="text-decoration: none;">Zhiyong Yang</a>, Sicong Li, <a href="https://qmhuang-ucas.github.io/" style="text-decoration: none;">Qingming Huang</a>

[\[Website\]](https://egovis.github.io/cvpr25/) \| [\[Leaderboard\]](https://www.codabench.org/competitions/2613/#/results-tab) \| [\[Technical Report\]](https://arxiv.org/pdf/2509.12990)

- Mistake Detection Track, Fine-grained Video Understanding.

# 📖 Academic Services
Conferences
 - *NeurIPS*：PC Member (2024, 2025, 2026)
 - *ICLR*：PC Member (2025, 2026)
 - *ICML*：PC Member (2025, 2026)
 - *CVPR*：PC Member (2026)
 - *ACM MM*：PC Member (2025, 2026) 
 - *IJCAI*：PC Member (2025) 
 - *AISTATS*：PC Member (2025, 2026) 
 - *ACM MM Asia*：PC Member (2025) 
 
Journals
 - *IEEE Transactions on Multimedia (T-MM)*: Reviewer
 - *IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT)*: Reviewer
 - *ACM Transactions on Multimedia Computing, Communications and Applications (TOMM)*: Reviewer
 - *Transactions on Machine Learning Research (TMLR)*: Reviewer
 - *Multimedia Systems*: Reviewer
 
# 💬 Invited Talks
- *2026.01*: &nbsp; TechBeat Talk of NeurIPS 2025. [\[Video\]](https://www.techbeat.net/talk-info?id=1022)
- *2025.10*: &nbsp; Graduate Student Academic Forum of the Journal of Image and Graphics (JIG) Talk of NeurIPS 2024. **<font color='red'> (Distinguished Presentation) </font>** [\[Video\]](https://www.bilibili.com/video/BV1hXxrzJEL1/?spm_id_from=333.337.search-card.all.click&vd_source=0f20a1f21f20a5634908f1acbb31017a)

# 🎖 Honors and Awards
- President of the Institute of Computing Technology, Chinese Academy of Sciences (ICT, CAS) **Excellence Award** (中国科学院计算技术研究所所长优秀奖), 2026
- **Outstanding Graduate** of Sichuan Province (四川省优秀毕业生), 2023
- **Outstanding Graduate** of University of Electronic Science and Technology of China (电子科技大学优秀毕业生), 2023
- **National Scholarship** (国家奖学金), 2022
- **Tencent First Prize Scholarship** (腾讯一等奖学金), 2021
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
