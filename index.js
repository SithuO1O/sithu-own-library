export const myName = 'Sithu Aung';
export const showMyName = () => {
    return myName;
};

export const showMyNameUi = () => {
    const h1 = document.createElement('h1');
    h1.innerText = myName;
    document.body.append(h1);
};

console.log(showMyNameUi());