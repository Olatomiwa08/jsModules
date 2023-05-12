const land = document.createElement('section');
const landtext = document.createElement('div')
landtext.setAttribute("class", "landtext")
land.append(landtext)
landtext.innerHTML = `
    <button><a href="#">Register</a></button>
    <h1>Visit our page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae vel quaerat <br> mollitia id sapiente consequatur nam quasi voluptate. Incidunt?</p>
`;
const immage = document.createElement('div')
immage.setAttribute('class','image')
 const imag = document.createElement('img');
imag.setAttribute('src', './portimage.jpg')

immage.append(imag)
land.append(immage)
export default land;
// main.append(land)

// container.append()

// const landpage = () =>{
//     const land = document.createElement('section');
//     const landtext = document.createElement('div')
//     landtext.setAttribute("class", "landtext")
//     land.append(landtext)
//     landtext.innerHTML = `
//     <button><a href="#">Register</a></button>
//     <h1>Visit our page</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae vel quaerat <br> mollitia id sapiente consequatur nam quasi voluptate. Incidunt?</p>
// `;
//     const immage = document.createElement('div')
//     immage.setAttribute('class','image')
//  const imag = document.createElement('img');
//     imag.setAttribute('src', './portimage.jpg')

// immage.append(imag)
// land.append(immage)
// // main.append(land)
// return land;
// }
// export default  landpage;