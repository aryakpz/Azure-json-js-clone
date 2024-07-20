
document.addEventListener('DOMContentLoaded', async () => {
    {

        await fetch('menu.json')
            .then(response => response.json())
            .then(data => {
                const logos = document.getElementById('logo')
                logos.src = data.nav.image;

                const team = document.getElementById('teams')
                team.innerHTML = data.nav.team;

                const navmenu = document.getElementById('nav-menu');
                data.nav.menu.forEach(item => {
                    const listitem = document.createElement('li');
                    listitem.innerHTML =
                        `<a href="${item.url}">
                ${item.name}
                <img src="${item.icon}"> </a>`;
                    navmenu.appendChild(listitem);
                });

                const rightb = document.getElementById('rightbutton')
                const downbutton = document.createElement('button')
                downbutton.innerHTML = data.nav.download.name
                rightb.appendChild(downbutton)
                const signbutton = document.createElement('button')
                signbutton.innerHTML = data.nav.sign.name
                rightb.appendChild(signbutton)



                // subhead part 


                const businessel = document.getElementById('bplans')
                businessel.innerHTML = data.subhead.busplan.name

                const homeel = document.getElementById('hplans')
                homeel.innerHTML = data.subhead.home.name


                const micro = document.getElementById("microdata")
                micro.innerHTML = data.subhead.microdata

                const sub = document.getElementById("subdata")
                sub.innerHTML = data.subhead.subdata


                // card one   

                const top = document.querySelector(".cardtop")
                top.innerHTML = data.cardsec.cardone.top



                const cardhead = document.querySelector(".cardhead")

                const card1 = document.createElement('h2')
                card1.innerHTML = data.cardsec.cardone.head
                cardhead.appendChild(card1)

                const spanone = document.createElement('span');

                spanone.innerHTML = `
                     <span class="amount">${data.cardsec.cardone.amount}</span>
                      ${data.cardsec.cardone.sub}
                    `;
                cardhead.appendChild(spanone);


                const cardauto = document.createElement('p')
                cardauto.innerHTML = data.cardsec.cardone.auto
                cardhead.appendChild(cardauto)

                const card3 = document.createElement('h4')
                card3.innerHTML = data.cardsec.cardone.price
                cardhead.appendChild(card3)



                const cardbutton = document.createElement('button')
                cardbutton.innerHTML = data.cardsec.cardone.buynow
                cardhead.appendChild(cardbutton)



                const cardlist = document.querySelector('.carddata');
                data.cardsec.cardone.datas.forEach(item => {
                    const listdata = document.createElement('li');
                    listdata.innerHTML = `
                <img src="${item.img}">
                ${item.content}`;
                    cardlist.appendChild(listdata);
                });

                const cardservice = document.querySelector('.card.one #service')
                cardservice.innerHTML = data.cardsec.cardone.service



                const appsone = document.querySelector(".card.one #apps");
                data.cardsec.cardone.apps.forEach(item => {
                    const apponelist = document.createElement('li');
                    apponelist.innerHTML = `
                    <img src=${item.img}>
                     <a href=${item.url}> 
                     ${item.data}</a>`

                    appsone.appendChild(apponelist)

                })



                // second card
                const cardtwohead = document.querySelector(".cardtwohead")


                const cardtwoh = document.createElement('h2')
                cardtwoh.innerHTML = data.cardsec.cardtwo.head
                cardtwohead.appendChild(cardtwoh)


                const spantwo = document.createElement('span');

                spantwo.innerHTML = `
                     <span class="amount">${data.cardsec.cardtwo.amount}</span>
                      ${data.cardsec.cardone.sub}
                    `;
                cardtwohead.appendChild(spantwo);




                const cardtwo2 = document.createElement('p')
                cardtwo2.innerHTML = data.cardsec.cardone.auto
                cardtwohead.appendChild(cardtwo2)



                const cardtwo3 = document.createElement('h4')
                cardtwo3.innerHTML = data.cardsec.cardone.price
                cardtwohead.appendChild(cardtwo3)


                const cardtwobutton = document.createElement('button')
                cardtwobutton.innerHTML = data.cardsec.cardone.buynow
                cardtwohead.appendChild(cardtwobutton)

                const cardtwotry = document.createElement('h3')
                cardtwotry.innerHTML = `${data.cardsec.cardone.try} <img src="${data.cardsec.cardone.tryimg}">`
                cardtwohead.appendChild(cardtwotry)

                const cardtwotrial = document.createElement('h6')
                cardtwotrial.innerHTML = data.cardsec.cardone.trial
                cardtwohead.appendChild(cardtwotrial)

                const cardtwoevery = document.createElement('h5')
                cardtwoevery.innerHTML = data.cardsec.cardone.everything
                cardtwohead.appendChild(cardtwoevery)


                const cardtwolist = document.querySelector('.cardtwodata');
                data.cardsec.cardtwo.datas.forEach(item => {
                    const listdatatwo = document.createElement('li');
                    listdatatwo.innerHTML = `
                <img src="${item.img}">
                ${item.content}`;
                    cardtwolist.appendChild(listdatatwo);
                });

                const cardtwoservice = document.querySelector('.card.two #service')
                cardtwoservice.innerHTML = data.cardsec.cardtwo.service



                const appstwo = document.querySelector(".card.two #apps");
                data.cardsec.cardtwo.apps.forEach(item => {
                    const apptwolist = document.createElement('li');
                    apptwolist.innerHTML = `
                    <img src=${item.img}>
                     <a href=${item.url}> 
                     ${item.data}</a>`

                    appstwo.appendChild(apptwolist)

                })



                const cardtwoweb = document.querySelector('.card.two #web')
                cardtwoweb.innerHTML = data.cardsec.cardtwo.web



                const webapps = document.querySelector(".card.two #webapp");
                data.cardsec.cardtwo.webapp.forEach(item => {
                    const weblist = document.createElement('li');
                    weblist.innerHTML = `
                    <img src=${item.img}>
                     <a href=${item.url}> 
                     ${item.data}</a>`

                    webapps.appendChild(weblist)

                })


                // third card



                const cardthreehead = document.querySelector(".cardthreehead")


                const cardthreeh = document.createElement('h2')
                cardthreeh.innerHTML = data.cardsec.cardthree.head
                cardthreehead.appendChild(cardthreeh)




                const span = document.createElement('span');

                span.innerHTML = `
                     <span class="amount">${data.cardsec.cardthree.amount}</span>
                      ${data.cardsec.cardone.sub}
                    `;
                cardthreehead.appendChild(span);

                const cardthree2 = document.createElement('p')
                cardthree2.innerHTML = data.cardsec.cardone.auto
                cardthreehead.appendChild(cardthree2)


                const cardthree3 = document.createElement('h4')
                cardthree3.innerHTML = data.cardsec.cardone.price
                cardthreehead.appendChild(cardthree3)


                const cardthreebutton = document.createElement('button')
                cardthreebutton.innerHTML = data.cardsec.cardone.buynow
                cardthreehead.appendChild(cardthreebutton)

                const cardthreetry = document.createElement('h3')
                cardthreetry.innerHTML = `${data.cardsec.cardone.try}
                 <img src="${data.cardsec.cardone.tryimg}">`
                cardthreehead.appendChild(cardthreetry)

                const cardthreetrial = document.createElement('h6')
                cardthreetrial.innerHTML = data.cardsec.cardone.trial
                cardthreehead.appendChild(cardthreetrial)

                const cardthreeevery = document.createElement('h5')
                cardthreeevery.innerHTML = data.cardsec.cardone.everything
                cardthreehead.appendChild(cardthreeevery)



                const cardthreelist = document.querySelector('.cardthreedata');
                data.cardsec.cardthree.datas.forEach(item => {
                    const listdatathree = document.createElement('li');
                    listdatathree.innerHTML = `<span>
            <img src="${item.img}">
            ${item.content}</span>`;
                    cardthreelist.appendChild(listdatathree);
                });

                const cardthreeservice = document.querySelector('.card.three #service')
                cardthreeservice.innerHTML = data.cardsec.cardthree.service


                const appsthree = document.querySelector(".card.three #apps");
                data.cardsec.cardthree.apps.forEach(item => {
                    const appthreelist = document.createElement('li');
                    appthreelist.innerHTML = `
                <img src=${item.img}>
                 <a href=${item.url}> 
                 ${item.data}</a>`

                    appsthree.appendChild(appthreelist)

                })




                //   table section    ================================




                const tabledata = document.querySelector('.tabledata')

                data.table.forEach(item => {
                    const tdatas = document.createElement('li');
                    tdatas.innerHTML = ` <span><img src="${item.img}"> ${item.data}</span>`

                    tabledata.appendChild(tdatas)

                })
                // first table

                const tableone = document.querySelector('.popularcard .card.one')

                const tabletop = document.querySelector(".popularcard .card.one .cardtop")
                tabletop.innerHTML = data.cardsec.cardone.top



                const tableonehead = document.querySelector(".popularcard .card.one .cardhead")

                const tonehead = document.createElement('h2')
                tonehead.innerHTML = data.cardsec.cardone.head



                tableonehead.appendChild(tonehead)



                const tonespan = document.createElement('span');

                tonespan.innerHTML = `
                          <span class="amount">${data.cardsec.cardone.amount}</span>
                           ${data.cardsec.cardone.sub}`;
                tableonehead.appendChild(tonespan);





                const toneauto = document.createElement('p')
                toneauto.innerHTML = data.cardsec.cardone.auto
                tableonehead.appendChild(toneauto)


                const toneprice = document.createElement('h4')
                toneprice.innerHTML = data.cardsec.cardone.price

                tableonehead.appendChild(toneprice)



                const tonebutton = document.createElement('button')
                tonebutton.innerHTML = data.cardsec.cardone.buynow

                tableonehead.appendChild(tonebutton)





        
            























                // secondtable














                const table2 = document.querySelector('.popularcard .card.two')



                const table2head = document.querySelector(".popularcard .card.two .cardhead")

                const t2head = document.createElement('h2')
                t2head.innerHTML = data.cardsec.cardone.head



                table2head.appendChild(t2head)



                const t2span = document.createElement('span');

                t2span.innerHTML = `
                          <span class="amount">${data.cardsec.cardone.amount}</span>
                           ${data.cardsec.cardone.sub}`;
                table2head.appendChild(t2span);





                const t2auto = document.createElement('p')
                t2auto.innerHTML = data.cardsec.cardone.auto
                table2head.appendChild(t2auto)


                const t2price = document.createElement('h4')
                t2price.innerHTML = data.cardsec.cardone.price

                table2head.appendChild(t2price)



                const t2button = document.createElement('button')
                t2button.innerHTML = data.cardsec.cardone.buynow

                table2head.appendChild(t2button)

                
                table2.appendChild(table2head)






                // third table


                const table3 = document.querySelector('.popularcard .card.three')





                const table3head = document.querySelector(".popularcard .card.two .cardhead")

                const t3head = document.createElement('h2')
                t3head.innerHTML = data.cardsec.cardone.head



                table3head.appendChild(t3head)



                const t3span = document.createElement('span');

                t3span.innerHTML = `
                          <span class="amount">${data.cardsec.cardone.amount}</span>
                           ${data.cardsec.cardone.sub}`;
                table3head.appendChild(t3span);





                const t3auto = document.createElement('p')
                t3auto.innerHTML = data.cardsec.cardone.auto
                table3head.appendChild(t3auto)


                const t3price = document.createElement('h4')
                t3price.innerHTML = data.cardsec.cardone.price

                table3head.appendChild(t3price)



                const t3button = document.createElement('button')
                t3button.innerHTML = data.cardsec.cardone.buynow

                table3head.appendChild(t3button)



                table3.appendChild(table3head)


                // premium ====================================









                const premium = document.querySelector(".pre1")

                const prehead = document.createElement('h2')
                prehead.innerHTML = data.premium.head
                premium.appendChild(prehead)




                const prespan = document.createElement('span');

                prespan.innerHTML = `
        <span class="amount">${data.premium.amount}</span>
         ${data.cardsec.cardone.sub}
       `;
                premium.appendChild(prespan);


                const preauto = document.createElement('p')
                preauto.innerHTML = data.cardsec.cardone.auto
                premium.appendChild(preauto)

                const preprice = document.createElement('h4')
                preprice.innerHTML = data.cardsec.cardone.price
                premium.appendChild(preprice)



                const prebutton = document.createElement('button')
                prebutton.innerHTML = data.cardsec.cardone.buynow
                premium.appendChild(prebutton)


                const prelearn = document.createElement('h3')
                prelearn.innerHTML = `<a href = "" >${data.premium.learn} <img src="${data.cardsec.cardone.tryimg}"></a>`
                premium.appendChild(prelearn)





                const pre2 = document.querySelector(".pre2")
                const presub = document.createElement('h3')
                presub.innerHTML = data.premium.subhead
                pre2.appendChild(presub)


                const predata = document.getElementById("predata")
                data.premium.data.forEach(item => {
                    const list = document.createElement('li')
                    list.innerHTML = `<img src="${item.img}"> ${item.content}`
                    predata.appendChild(list)
                })
                pre2.appendChild(predata)











                // pilot 




                const pilot = document.querySelector(".pilotdata")
                const head = document.createElement('h2')
                head.innerHTML = data.pilot.head
                pilot.appendChild(head)

                const p1 = document.createElement('p')
                p1.innerHTML = ` <a href ="${data.pilot.url} "> ${data.pilot.link}</a>     ${data.pilot.p1}`
                pilot.appendChild(p1)


                const p2 = document.createElement('p')
                p2.innerHTML = data.pilot.p2
                pilot.appendChild(p2)



                const pilotbutton = document.querySelector(".buttonsec")
                const b1 = document.createElement('div')
                b1.innerHTML = `<button class ="price ">${data.pilot.btn1}</button>`
                pilotbutton.appendChild(b1)


                const b2 = document.createElement('div')
                b2.innerHTML = `<button class =" learn ">${data.pilot.btn2}</button>`
                pilotbutton.appendChild(b2)

                pilot.append(pilotbutton)


                const imageUrl = data.pilot.image;
                const img = document.createElement('img');
                img.src = imageUrl;
                document.querySelector('.pilotimage').appendChild(img);








                // frequently asked questions 




                const main_frequency = document.querySelector('.frequency')



                const frequency = document.querySelector('.subfrequency')

                const frequency_head = document.createElement('h2')

                frequency_head.innerHTML = data.frequency.head
                frequency.appendChild(frequency_head)

                main_frequency.appendChild(frequency)

                const links = document.querySelector('.links')

                const linkone = document.createElement('p')
                linkone.innerHTML = `<a  href ="# " class="firstlink">${data.frequency.link1}</a>`

                links.appendChild(linkone)



                const linktwo = document.createElement('p')
                linktwo.innerHTML = `<a class="seclink">${data.frequency.link2}</a>`

                links.appendChild(linktwo)


                main_frequency.appendChild(links)




                const ques_sec = document.querySelector('.question')
                data.frequency.questions.forEach(item => {
                    const question = document.createElement('div')
                    question.innerHTML = `<img src="${item.img}">${item.ques}`
                    ques_sec.appendChild(question)

                })
                main_frequency.appendChild(ques_sec)











                // see more options

                const option = document.querySelector('.suboptions')
                const optionhead = document.createElement('h2')

                optionhead.innerHTML = data.options.head
                option.appendChild(optionhead)


                const optiondiv = document.querySelector('.options')
                const optionsec = document.querySelector('.optul')
                data.options.content.forEach(item => {
                    const optiondata = document.createElement('li')
                    optiondata.innerHTML = `<a href=""> <img src="${item.img}">${item.data}</a>`
                    optionsec.appendChild(optiondata)
                    optiondiv.appendChild(optiondata)



                })
                option.appendChild(optiondiv)




                // micro team section

                const mainmicro = document.querySelector('.submicro')

                const microsec = document.querySelector('.microdata')
                const microhead = document.createElement('h2')
                microhead.innerHTML = data.microsec.head
                microsec.appendChild(microhead)





                const microbtn = document.getElementById('microbutton')
                const bt1 = document.createElement('button')
                bt1.innerHTML = `<button class="microb1">${data.microsec.btn1}</button>`
                microbtn.appendChild(bt1)

                const bt2 = document.createElement('button')
                bt2.innerHTML = `<button class="microb2">${data.microsec.btn2}</button>`
                microbtn.appendChild(bt2)


                microsec.appendChild(microbtn)


                const linksec = document.getElementById('goto')
                linksec.innerHTML = `<a href=""> <span>${data.microsec.link}</span> <img src="${data.microsec.img}"</a>`
                microsec.appendChild(linksec)








                const microimgsec = document.querySelector('.microimg')

                data.microsec.rightsec.forEach(item => {
                    const section = document.createElement('div')
                    // section.classList.add('img_section')
                    const image = ` <div class="imgsec">

                       <img src="${item.img}"></div>`


                    const datasec = document.createElement('div')

                    // section.classList.add('data_section')
                    datasec.innerHTML = `<div class="datasec">
                   ${item.data.head} 
                    <a href="">${item.data.link} <img src="${item.data.arrow}"></a>
                    </div>`

                    section.innerHTML = image

                    section.appendChild(datasec)

                    microimgsec.appendChild(section)

                })








                // policies

                const policy = document.querySelector('.terms')
                data.policies.forEach(item => {
                    const term = document.createElement('li')
                    term.innerHTML = item

                    policy.appendChild(term)
                })





                // social sections

                const social = document.querySelector('.subsocial')
                const socialdata = document.getElementById('socialdata')

                socialdata.innerHTML = data.social.data

                const socialimg = document.getElementById('socialimg')
                data.social.image.forEach(item => {
                    const list = document.createElement("li")
                    list.innerHTML = `<a href =' '>
                    <img src="${item.img}"></a>`

                    socialimg.appendChild(list)
                })






                // footer 





                const footercontainer = document.getElementById('footer-container');
                const sections = data.footer.sections;

                sections.forEach(item => {
                    const footer = document.createElement('div');
                    footer.classList.add('footer-section');

                    const head = document.createElement('h3');
                    head.textContent = item.title;
                    footer.appendChild(head);

                    const footlist = document.createElement('ul');
                    item.data.forEach(item => {
                        const list = document.createElement('li');
                        list.textContent = item;
                        footlist.appendChild(list);
                    });

                    footer.appendChild(footlist);
                    footercontainer.appendChild(footer);
                })


                const span1 = document.getElementById('spanone')
                span1.innerHTML = `<img src="${data.footerbottom.left.img1}">
             ${data.footerbottom.left.data1}`
                const span2 = document.getElementById('spantwo')
                span2.innerHTML = `<img src="${data.footerbottom.left.img2}">
              ${data.footerbottom.left.data2}`
                const span3 = document.getElementById('spanthree')
                span3.innerHTML = `${data.footerbottom.left.data3}`





                const footright = document.querySelector('.foot2ul')

                data.footerbottom.right.forEach(item => {
                    const items = document.createElement('li')
                    items.innerHTML = item

                    footright.appendChild(items)
                })











            })
            .catch(error => console.error('Error fetching the JSON data:', error))
    }
});