const about = document.createElement('section')
about.setAttribute('class','about')
const iso = document.createElement('img')
iso.setAttribute('src','/Untitled-2.png')
about.append(iso)

const abouttext = document.createElement('div')
abouttext.setAttribute('class','abouttext')
abouttext.innerHTML = `
<h1>ABOUT US</h1>
<h3>Excepteur sint occaecat cupidatat non <br> proident, sunt in culpa qui officiabr
   deserunt.
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br> sed do eiusmod tempor incididunt ut labore et dolore magna <br> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br> ullamco laboris nisi ut</p>

`
about.append(abouttext)
main.append(about)
