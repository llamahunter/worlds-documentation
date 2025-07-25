<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:image" content="images/MHCP_OG_image.jpg"/>
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
  <title>MHCP Creator Made Docs</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <link rel="stylesheet" href="docs-style.css">
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
      <div class="header-row">
    <div class="left-nav">
    <button class="hamburger" id="menu-toggle">☰</button>
    <div class="logo"><a href="https://mhcpcreators.github.io/worlds-documentation/" id="logo-link">MHCP Creator Made Docs</a></div>
    <div class="mobile-title mobile-only"><a href="https://mhcpcreators.github.io/worlds-documentation/">Creator Docs</a></div>
    <nav class="nav-links">
      <a href="https://mhcpcreators.github.io/worlds-documentation/docs.html#docs%2Fmanuals-and-cheat-sheets%2Fget-started.md">Creator Docs</a>
      <a href="https://developers.meta.com/horizon-worlds/learn">Meta Docs</a>
      <a href="https://github.com/MHCPCreators/horizonCreatorManual">Creator Manual</a>
      <a href="https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums">Forums</a>
      <a href="https://mhcpcreators.github.io/worlds-documentation/docs.html#docs%2Fmanuals-and-cheat-sheets%2Fcontribute-to-creator-documentation.md">Contribute</a>
    </nav>
    </div>
          <div class="right-controls">
              <a href="https://www.youtube.com/@creatorprograms" target="_blank" style="color: #FF0000;">
            <i class="fab fa-youtube"></i>
            </a>
      <button id="theme-toggle" aria-label="Toggle dark mode">🌙/☀️</button>
  </div>
  </div>
</header>
<div class="page-body">
  <aside class="sidebar">
  <button class="sidebar-close" id="sidebar-close" aria-label="Close sidebar">✕</button>
    <h2>Overview</h2>
<input type="text" id="search-input" placeholder="Search documents..." />
    <ul id="doc-list"></ul>
    <hr class="mobile-sidebar-divider mobile-only" />
<div class="mobile-sidebar-nav mobile-only">
  <a href="https://mhcpcreators.github.io/worlds-documentation/docs.html#docs%2Fmanuals-and-cheat-sheets%2Fget-started.md">Creator Docs</a>
  <a href="https://developers.meta.com/horizon-worlds/learn">Meta Docs</a>
  <a href="https://github.com/MHCPCreators/horizonCreatorManual">Creator Manual</a>
  <a href="https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums">Forums</a>
  <a href="https://mhcpcreators.github.io/worlds-documentation/docs.html#docs%2Fmanuals-and-cheat-sheets%2Fcontribute-to-creator-documentation.md">Contribute</a>
</div>

  </aside>

  <main class="content">
    <div class="doc-container">
      <div id="doc-content">Select a document to begin reading.</div>
      <div class="nav-buttons">
        <button id="prev-btn">← Previous</button>
        <button id="next-btn">Next →</button>
      </div>
    </div>
  </main>

  <aside class="right-sidebar">
    <h3>On this page</h3>
    <ul id="doc-toc"></ul>
  </aside>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
  <div class="footer-links">
    <p>Built by MHCP Creators • 
      <a href="https://github.com/MHCPCreators/worlds-documentation">GitHub</a> • 
      <a href="https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums">Forums</a> •
    </p>
    <a href="https://www.youtube.com/@creatorprograms" target="_blank" aria-label="Creator Programs YouTube Channel">
      <i class="fab fa-youtube"></i>
    </a>
  </div>
  </footer>

<script src="docs-script.js"></script>

</body>
</html>
