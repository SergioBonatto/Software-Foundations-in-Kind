// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">User Guide</li><li class="chapter-item expanded "><a href="guide/Started.html"><strong aria-hidden="true">1.</strong> Getting Started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="guide/About.html"><strong aria-hidden="true">1.1.</strong> About Kind</a></li><li class="chapter-item expanded "><a href="guide/Installation.html"><strong aria-hidden="true">1.2.</strong> Installation</a></li><li class="chapter-item expanded "><a href="cli/World.html"><strong aria-hidden="true">1.3.</strong> Hello World!</a></li><li class="chapter-item expanded "><a href="cli/kind.html"><strong aria-hidden="true">1.4.</strong> Hello Kind!</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Book</li><li class="chapter-item expanded "><a href="Book/chapter_02/2,1.html"><strong aria-hidden="true">2.</strong> Basics: Introduction</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_02/2,2.html"><strong aria-hidden="true">2.1.</strong> Enumerated Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_02/2,2,1.html"><strong aria-hidden="true">2.1.1.</strong> Days of the Week</a></li></ol></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,3.html"><strong aria-hidden="true">2.2.</strong> Booleans</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,4.html"><strong aria-hidden="true">2.3.</strong> Function Types</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,5.html"><strong aria-hidden="true">2.4.</strong> Modules</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,6.html"><strong aria-hidden="true">2.5.</strong> Numbers</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,7.html"><strong aria-hidden="true">2.6.</strong> Proof by Simplification</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,8.html"><strong aria-hidden="true">2.7.</strong> Proof by Application</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,9.html"><strong aria-hidden="true">2.8.</strong> Proof by Case Analysis</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,10.html"><strong aria-hidden="true">2.9.</strong> Proof by Rewriting</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,11.html"><strong aria-hidden="true">2.10.</strong> Equal.chain and Equal.mirror</a></li><li class="chapter-item expanded "><a href="Book/chapter_02/2,12.html"><strong aria-hidden="true">2.11.</strong> More Exercises</a></li></ol></li><li class="chapter-item expanded "><a href="Book/chapter_03/3.html"><strong aria-hidden="true">3.</strong> Induction: Proof by Induction</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_03/3,1.html"><strong aria-hidden="true">3.1.</strong> Exercises</a></li><li class="chapter-item expanded "><a href="Book/chapter_03/3,2.html"><strong aria-hidden="true">3.2.</strong> More Exercises</a></li></ol></li><li class="chapter-item expanded "><a href="Book/chapter_04/4.html"><strong aria-hidden="true">4.</strong> Data Structures</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_04/4,1.html"><strong aria-hidden="true">4.1.</strong> Lists of Numbers</a></li><li class="chapter-item expanded "><a href="Book/chapter_04/4,2.html"><strong aria-hidden="true">4.2.</strong> Reasoning about Lists</a></li><li class="chapter-item expanded "><a href="Book/chapter_04/4,3.html"><strong aria-hidden="true">4.3.</strong> Maybe</a></li></ol></li><li class="chapter-item expanded "><a href="Book/chapter_05/5.html"><strong aria-hidden="true">5.</strong> Polymorphism</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_05/5,1.html"><strong aria-hidden="true">5.1.</strong> Functions as Data</a></li><li class="chapter-item expanded "><a href="Book/chapter_05/5,2.html"><strong aria-hidden="true">5.2.</strong> Additional Exercises</a></li></ol></li><li class="chapter-item expanded "><a href="Book/chapter_06/6.html"><strong aria-hidden="true">6.</strong> Logic in Kind</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_06/6,1.html"><strong aria-hidden="true">6.1.</strong> Logical Connectives</a></li><li class="chapter-item expanded "><a href="Book/chapter_06/6,2.html"><strong aria-hidden="true">6.2.</strong> Falsehood and Negation</a></li><li class="chapter-item expanded "><a href="Book/chapter_06/6,3.html"><strong aria-hidden="true">6.3.</strong> Truth, Equivalence, and Quantification</a></li><li class="chapter-item expanded "><a href="Book/chapter_06/6,4.html"><strong aria-hidden="true">6.4.</strong> Programming with Propositions</a></li><li class="chapter-item expanded "><a href="Book/chapter_06/6,5.html"><strong aria-hidden="true">6.5.</strong> Applying Theorems to Arguments</a></li><li class="chapter-item expanded "><a href="Book/chapter_06/6,6.html"><strong aria-hidden="true">6.6.</strong> Kind vs Set Theory</a></li><li class="chapter-item expanded "><a href="Book/chapter_06/6,7.html"><strong aria-hidden="true">6.7.</strong> Classical vs. Constructive Logic</a></li></ol></li><li class="chapter-item expanded "><a href="Book/chapter_07/7.html"><strong aria-hidden="true">7.</strong> Inductively Defined Propositions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Book/chapter_07/7.1.html"><strong aria-hidden="true">7.1.</strong> Using Evidence in Proofs</a></li><li class="chapter-item expanded "><a href="Book/chapter_07/7.2.html"><strong aria-hidden="true">7.2.</strong> Inductive Relations</a></li><li class="chapter-item expanded "><a href="Book/chapter_07/7.3.html"><strong aria-hidden="true">7.3.</strong> Case Study: Regular Expressions</a></li><li class="chapter-item expanded "><a href="Book/chapter_07/7.4.html"><strong aria-hidden="true">7.4.</strong> Case Study: Improving Reflection</a></li><li class="chapter-item expanded "><a href="Book/chapter_07/7.5.html"><strong aria-hidden="true">7.5.</strong> Additional Exercises</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="Contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
