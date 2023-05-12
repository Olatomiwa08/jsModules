import header  from "/headfolder/header.js";
import land from "/mainpage/mainpagejs/landin.js";
import about from "/mainpage/mainpagejs/about.js"
import foot from "/footfolder/footer.js"

let container = document.getElementById('container');

const main = document.createElement('main');
main.append(header)
main.append(land);
main.append(about)
main.append(foot)

container.append(main)