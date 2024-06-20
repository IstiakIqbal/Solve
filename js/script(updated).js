async function fetchMobileData() {
    Loading(true)
    const inputField = document.getElementById('input');
    const FindPhone = inputField.value;
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${FindPhone}`);
    const data = await response.json();
    const mobilesData = data.data;
    showDataAsCard(mobilesData);
}


const showDataAsCard= mobilesData => {
    const motherDiv = document.getElementById('mainDiv');
    const createDiv2 = document.createElement('div');
    createDiv2.classList.add('row');
    motherDiv.innerHTML = '';
    motherDiv.appendChild(createDiv2);
    const SM = document.getElementById('SMbtn');
    if (mobilesData.length > 12) {
        SM.classList.remove('none');
    }
    else {
        SM.classList.add('none');
    }
    mobilesData = mobilesData.slice(0, 12);
    for (const Phone of mobilesData) {
        const createDiv3 = document.createElement('div');
        createDiv3.classList.add('col')
        createDiv3.innerHTML = `
        <div class = 'myFlex'>
        <div class="card mt-5 p-3" style="width: 18rem;">
        <img src="${Phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${Phone.phone_name}</h5>
        <p class="card-text">${Phone.slug}</p>
        <a href="#" class="btn btn-primary">Add to card</a>
        </div>
        </div>
        </div>
        
        `
        createDiv2.appendChild(createDiv3);
    }
    Loading(false);
}

function Loading(isloading){
    const load = document.getElementById('loading');
    if(isloading){
        load.classList.remove('none');
    }
    else{
        load.classList.add('none')
    }
}
