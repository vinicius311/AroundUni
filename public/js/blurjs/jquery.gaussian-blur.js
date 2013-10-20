


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jQuery-Gaussian-Blur/jquery.gaussian-blur.js at master · finom/jQuery-Gaussian-Blur · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe113-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="0EC89A8A:1FA7:1E13B432:525D255A" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="1zrtbmvxiGrNjyW25Up6fJ6hzie0pP3ZejIL3Iu3nYA=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-ce4d3d1122ff6f5d3c4e8bbc3002c454a5f0861c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-cc43a394e192dbfe81aa4563f81267f5c57f6a6a.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5036c64d838328b79e082f548848e2898412e869.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-f3419c3f1df7d70ca343e6403f456b5c884fa69e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="2b5ba42561f7aa8de2c7d206300bc5bc">

        <link data-pjax-transient rel='permalink' href='/finom/jQuery-Gaussian-Blur/blob/769e2ee9338e18f849dd19d759c1c8fd878c0705/jquery.gaussian-blur.js'>
  <meta property="og:title" content="jQuery-Gaussian-Blur"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/finom/jQuery-Gaussian-Blur"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jQuery-Gaussian-Blur - Plugin which adds Gaussian Blur effect for images"/>

  <meta name="description" content="jQuery-Gaussian-Blur - Plugin which adds Gaussian Blur effect for images" />

  <meta content="1082083" name="octolytics-dimension-user_id" /><meta content="finom" name="octolytics-dimension-user_login" /><meta content="2809846" name="octolytics-dimension-repository_id" /><meta content="finom/jQuery-Gaussian-Blur" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2809846" name="octolytics-dimension-repository_network_root_id" /><meta content="finom/jQuery-Gaussian-Blur" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/finom/jQuery-Gaussian-Blur/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-Gaussian-Blur:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production linux vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Ffinom%2FjQuery-Gaussian-Blur%2Fblob%2Fmaster%2Fjquery.gaussian-blur.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="finom/jQuery-Gaussian-Blur"
      data-branch="master"
      data-sha="71a3f0820cde862384e25c7b2366fbac91df9d05"
  >

    <input type="hidden" name="nwo" value="finom/jQuery-Gaussian-Blur" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Ffinom%2FjQuery-Gaussian-Blur"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/finom/jQuery-Gaussian-Blur/stargazers">
  8
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Ffinom%2FjQuery-Gaussian-Blur"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/finom/jQuery-Gaussian-Blur/network" class="social-count">
        6
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/finom" class="url fn" itemprop="url" rel="author"><span itemprop="title">finom</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/finom/jQuery-Gaussian-Blur" class="js-current-repository js-repo-home-link">jQuery-Gaussian-Blur</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/finom/jQuery-Gaussian-Blur" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /finom/jQuery-Gaussian-Blur">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/finom/jQuery-Gaussian-Blur/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /finom/jQuery-Gaussian-Blur/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/finom/jQuery-Gaussian-Blur/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /finom/jQuery-Gaussian-Blur/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/finom/jQuery-Gaussian-Blur/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /finom/jQuery-Gaussian-Blur/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/finom/jQuery-Gaussian-Blur/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /finom/jQuery-Gaussian-Blur/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/finom/jQuery-Gaussian-Blur/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /finom/jQuery-Gaussian-Blur/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/finom/jQuery-Gaussian-Blur.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/finom/jQuery-Gaussian-Blur.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/finom/jQuery-Gaussian-Blur" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/finom/jQuery-Gaussian-Blur" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/finom/jQuery-Gaussian-Blur/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2939822bf045cdb2b154bf18975fcf21 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/finom/jQuery-Gaussian-Blur/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/finom/jQuery-Gaussian-Blur/blob/gh-pages/jquery.gaussian-blur.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/finom/jQuery-Gaussian-Blur/blob/master/jquery.gaussian-blur.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/finom/jQuery-Gaussian-Blur" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-Gaussian-Blur</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.gaussian-blur.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.gaussian-blur.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/60629ca7a5b859994d54d8c900985b0a?d=https%3A%2F%2Fidenticons.github.com%2Fa9c0e233c8383710e50d1857e769c162.png&amp;s=140" width="24" />
      <span class="author"><a href="/finom" rel="author">finom</a></span>
      <time class="js-relative-date" datetime="2011-11-19T09:57:01-08:00" title="2011-11-19 09:57:01">November 19, 2011</time>
      <div class="commit-title">
          <a href="/finom/jQuery-Gaussian-Blur/commit/1b578860c58b4cd57e9ec88e34e2377bfb1bfa0f" class="message" data-pjax="true" title="Changed README">Changed README</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
        
      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/60629ca7a5b859994d54d8c900985b0a?d=https%3A%2F%2Fidenticons.github.com%2Fa9c0e233c8383710e50d1857e769c162.png&amp;s=140" width="24" />
            <a href="/finom">finom</a>
          </li>
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>109 lines (88 sloc)</span>
        <span>3.63 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/finom/jQuery-Gaussian-Blur/raw/master/jquery.gaussian-blur.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/finom/jQuery-Gaussian-Blur/blame/master/jquery.gaussian-blur.js" class="button minibutton ">Blame</a>
          <a href="/finom/jQuery-Gaussian-Blur/commits/master/jquery.gaussian-blur.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'>	<span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">;</span></div><div class='line' id='LC4'>	<span class="kd">var</span> <span class="nx">isLtIE8</span> <span class="o">=</span> <span class="o">~</span><span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;MSIE 6&#39;</span><span class="p">)</span>	<span class="o">||</span> <span class="o">~</span><span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;MSIE 7&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="o">~</span><span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;MSIE 8&#39;</span><span class="p">);</span> <span class="c1">//is it old IE</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="c1">//mitcro lib that creates SVG elements and adds attributes for it</span></div><div class='line' id='LC7'>	<span class="kd">var</span> <span class="nx">SVG</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>		<span class="c1">//namespaces</span></div><div class='line' id='LC10'>		<span class="nx">svgns</span><span class="o">:</span> <span class="s1">&#39;http://www.w3.org/2000/svg&#39;</span><span class="p">,</span></div><div class='line' id='LC11'>		<span class="nx">xlink</span><span class="o">:</span> <span class="s1">&#39;http://www.w3.org/1999/xlink&#39;</span><span class="p">,</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>		<span class="c1">//creating of SVG element</span></div><div class='line' id='LC14'>		<span class="nx">createElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">){</span></div><div class='line' id='LC15'>			<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">SVG</span><span class="p">.</span><span class="nx">svgns</span><span class="p">,</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>			<span class="k">if</span><span class="p">(</span><span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'>				<span class="nx">SVG</span><span class="p">.</span><span class="nx">setAttr</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">);</span></div><div class='line' id='LC19'>			<span class="p">}</span></div><div class='line' id='LC20'>			<span class="k">return</span> <span class="nx">element</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="p">},</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>		<span class="c1">//setting attributes</span></div><div class='line' id='LC24'>		<span class="nx">setAttr</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>			<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>				<span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="s1">&#39;href&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//path of an image should be stored at xlink:href attribute</span></div><div class='line' id='LC27'>					<span class="nx">element</span><span class="p">.</span><span class="nx">setAttributeNS</span><span class="p">(</span><span class="nx">SVG</span><span class="p">.</span><span class="nx">xlink</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC28'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">//common attribute</span></div><div class='line' id='LC29'>					<span class="nx">element</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC30'>				<span class="p">}</span></div><div class='line' id='LC31'>			<span class="p">}</span></div><div class='line' id='LC32'>			<span class="k">return</span> <span class="nx">element</span><span class="p">;</span></div><div class='line' id='LC33'>		<span class="p">}</span></div><div class='line' id='LC34'>	<span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">gaussianBlur</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">args</span><span class="p">){</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>		<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC39'>			<span class="nx">deviation</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span> <span class="c1">//intensity of blur </span></div><div class='line' id='LC40'>			<span class="nx">imageClass</span><span class="o">:</span> <span class="s1">&#39;blurImage&#39;</span>	<span class="c1">//the class of original image</span></div><div class='line' id='LC41'>		<span class="p">},</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC44'>			<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>			<span class="kd">var</span> <span class="nx">$img</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;img.&#39;</span><span class="o">+</span><span class="nx">args</span><span class="p">.</span><span class="nx">imageClass</span><span class="p">);</span> <span class="c1">//image that should be blurred</span></div><div class='line' id='LC47'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$img</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>			<span class="kd">var</span> <span class="nx">blurredId</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span> <span class="c1">//unique id for blurred image</span></div><div class='line' id='LC50'>			<span class="kd">var</span> <span class="nx">imgSrc</span> <span class="o">=</span> <span class="nx">$img</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">);</span> <span class="c1">//original image&#39;s path</span></div><div class='line' id='LC51'>			<span class="kd">var</span> <span class="nx">imgWidth</span> <span class="o">=</span> <span class="nx">$img</span><span class="p">.</span><span class="nx">width</span><span class="p">();</span> <span class="c1">//width</span></div><div class='line' id='LC52'>			<span class="kd">var</span> <span class="nx">imgHeight</span> <span class="o">=</span> <span class="nx">$img</span><span class="p">.</span><span class="nx">height</span><span class="p">();</span> <span class="c1">//height (your CO :))</span></div><div class='line' id='LC53'>			<span class="kd">var</span> <span class="nx">svg</span><span class="p">,</span> <span class="nx">filterId</span><span class="p">,</span> <span class="nx">filter</span><span class="p">,</span> <span class="nx">gaussianBlur</span><span class="p">,</span> <span class="nx">image</span><span class="p">;</span> <span class="c1">//description below</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;[id^=&quot;blurred&quot;]&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span> <span class="c1">//removing the blurred image during second using of plagin</span></div><div class='line' id='LC56'>														<span class="c1">//problem is that we can&#39;t add any class to SVG element</span></div><div class='line' id='LC57'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">width</span><span class="p">(</span><span class="nx">imgWidth</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span><span class="nx">imgHeight</span><span class="p">);</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">isLtIE8</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//if it modern browser</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>				<span class="nx">svg</span> <span class="o">=</span> <span class="nx">SVG</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;svg&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="c1">//our SVG element </span></div><div class='line' id='LC62'>					<span class="nx">xmlns</span><span class="o">:</span> <span class="nx">SVG</span><span class="p">.</span><span class="nx">svgns</span><span class="p">,</span></div><div class='line' id='LC63'>					<span class="nx">version</span><span class="o">:</span> <span class="s1">&#39;1.1&#39;</span><span class="p">,</span></div><div class='line' id='LC64'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">imgWidth</span><span class="p">,</span></div><div class='line' id='LC65'>					<span class="nx">height</span><span class="o">:</span> <span class="nx">imgHeight</span><span class="p">,</span></div><div class='line' id='LC66'>					<span class="nx">id</span><span class="o">:</span> <span class="s1">&#39;blurred&#39;</span><span class="o">+</span><span class="nx">blurredId</span></div><div class='line' id='LC67'>				<span class="p">});</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>				<span class="nx">filterId</span> <span class="o">=</span> <span class="s1">&#39;blur&#39;</span><span class="o">+</span><span class="nx">blurredId</span><span class="p">;</span> <span class="c1">//id of the filter that is called by image element</span></div><div class='line' id='LC70'>				<span class="nx">filter</span> <span class="o">=</span> <span class="nx">SVG</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;filter&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="c1">//filter</span></div><div class='line' id='LC71'>					<span class="nx">id</span><span class="o">:</span><span class="nx">filterId</span></div><div class='line' id='LC72'>				<span class="p">});</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>				<span class="nx">gaussianBlur</span> <span class="o">=</span> <span class="nx">SVG</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;feGaussianBlur&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="c1">//gaussian blur element</span></div><div class='line' id='LC75'>					<span class="s1">&#39;in&#39;</span><span class="o">:</span><span class="s1">&#39;SourceGraphic&#39;</span><span class="p">,</span> <span class="c1">//&quot;in&quot; is keyword. Opera generates an error if we don&#39;t put quotes</span></div><div class='line' id='LC76'>					<span class="nx">stdDeviation</span><span class="o">:</span> <span class="nx">args</span><span class="p">.</span><span class="nx">deviation</span> <span class="c1">//intencity of blur</span></div><div class='line' id='LC77'>				<span class="p">});</span> </div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>				<span class="nx">image</span> <span class="o">=</span> <span class="nx">SVG</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;image&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="c1">//The image that uses the filter of blur</span></div><div class='line' id='LC80'>					<span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC81'>					<span class="nx">y</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC82'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">imgWidth</span><span class="p">,</span></div><div class='line' id='LC83'>					<span class="nx">height</span><span class="o">:</span> <span class="nx">imgHeight</span><span class="p">,</span></div><div class='line' id='LC84'>					<span class="nx">href</span><span class="o">:</span> <span class="nx">imgSrc</span><span class="p">,</span></div><div class='line' id='LC85'>					<span class="nx">style</span><span class="o">:</span> <span class="s1">&#39;filter:url(#&#39;</span><span class="o">+</span><span class="nx">filterId</span><span class="o">+</span><span class="s1">&#39;)&#39;</span> <span class="c1">//filter link</span></div><div class='line' id='LC86'>				<span class="p">});</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>				<span class="nx">filter</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">gaussianBlur</span><span class="p">);</span> <span class="c1">//adding the element of blur into the element of filter</span></div><div class='line' id='LC89'>				<span class="nx">svg</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">filter</span><span class="p">);</span> <span class="c1">//adding the filter into the SVG</span></div><div class='line' id='LC90'>				<span class="nx">svg</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">image</span><span class="p">);</span> <span class="c1">//adding an element of an image into the SVG</span></div><div class='line' id='LC91'>				<span class="k">this</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">svg</span><span class="p">);</span> <span class="c1">//adding an SVG element into span which contains the original image</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">//if it&#39;s IE6,7,8</span></div><div class='line' id='LC94'>				<span class="nx">$img</span><span class="p">.</span><span class="nx">clone</span><span class="p">().</span><span class="nx">css</span><span class="p">({</span> <span class="c1">//cloning of the original image and adding some attributes</span></div><div class='line' id='LC95'>					<span class="c1">//filter property; here the intensity of blur multipied by two is around equal to the intensity in common browsers.   </span></div><div class='line' id='LC96'>					<span class="nx">filter</span><span class="o">:</span> <span class="s1">&#39;progid:DXImageTransform.Microsoft.Blur(pixelradius=&#39;</span> <span class="o">+</span> <span class="nx">args</span><span class="p">.</span><span class="nx">deviation</span><span class="o">*</span><span class="mi">2</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">,</span></div><div class='line' id='LC97'>					<span class="c1">//aligning of the blurred image by vertical and horizontal</span></div><div class='line' id='LC98'>					<span class="nx">top</span><span class="o">:</span> <span class="o">-</span><span class="nx">args</span><span class="p">.</span><span class="nx">deviation</span><span class="o">*</span><span class="mi">2</span><span class="p">,</span> </div><div class='line' id='LC99'>					<span class="nx">left</span><span class="o">:</span> <span class="o">-</span><span class="nx">args</span><span class="p">.</span><span class="nx">deviation</span><span class="o">*</span><span class="mi">2</span><span class="p">,</span></div><div class='line' id='LC100'>					<span class="c1">//somehow the heights and the widths of the image are unequal; fixing</span></div><div class='line' id='LC101'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">imgWidth</span><span class="p">,</span></div><div class='line' id='LC102'>					<span class="nx">height</span><span class="o">:</span> <span class="nx">imgHeight</span></div><div class='line' id='LC103'>				<span class="p">}).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">args</span><span class="p">.</span><span class="nx">imageClass</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="s1">&#39;blurred&#39;</span><span class="o">+</span><span class="nx">blurredId</span><span class="p">).</span><span class="nx">appendTo</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC104'>			<span class="p">}</span></div><div class='line' id='LC105'>		<span class="p">});</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>	<span class="p">}</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'><span class="p">})();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04232s from github-fe113-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/finom/jQuery-Gaussian-Blur/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

