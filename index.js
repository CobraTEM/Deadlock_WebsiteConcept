
window.onload= function(){ loadTextBIG(); loadTextSMALL(); }

const randomIndex = Math.floor(Math.random() * 5);

const textSelect= [
    '"The Next Big Thing It Will Overtake Overwatch For Sure"',
    '"One Of The Most Innovative Games In The MOBA Genre"',
    '"Might Be Better Than Fortnite"',
    '"I\'m Already Addicted!"',
    '"A Unique Take On The MOBA Genre"'
  ];
   

  function getRandomText() {
    return textSelect[randomIndex];
  }

  function loadTextBIG() {
    const myDiv = document.getElementById('div1_text');
    myDiv.innerHTML= getRandomText();
  }
   
  const textSelect2= [
    '- Shroud',
    '- Destructoid',
    '- XQC',
    '- OhnePixel',
    '- PC Gamer'
  ];
   
  function getRandomText2() {
      return textSelect2[randomIndex];
    }

    function loadTextSMALL() {
        const myDiv2 = document.getElementById('div2_text');
        myDiv2.innerHTML= getRandomText2();
      }

    function LoadData() {
      fetch("heroes.json")
      .then(function(response){
         return response.json();
      })
      .then(function(heroes){
         let placeholder = document.querySelector("#data-output");
         let out = "";
         for(let hero of heroes){
            out += `
                <div id="rosterselect" class="HeroCard2 CardBG">
          <span><span><a href="${hero.name}.html" title="${hero.name}">
            <img src="${hero.images.top_bar_vertical_image}" decoding="async" width="120" height="200"></a></span></span>
          <p class="CardText">${hero.name}</p>
        </div>
            `;
         }
       
         placeholder.innerHTML = out;
      });
    }
  
    var weaponbuttonpressed = 0;

    function weaponShopClick() {
      if (weaponbuttonpressed == 1) {

      }
      else {
      var element1 = document.getElementById("weaponcont");
      element1.classList.add("active");

      const open = document.querySelector('#weaponcont'); 
      open.style.backgroundImage = "url('images/shop/shop_tab_weapon_open.png')"; 

        let list = document.querySelector("#list-output");
        let out2 = `<div class="shop-mod-list" data-aos="fade-down"
                      style="background-image: url(&quot;images/shop/shop_bg_weapon.png&quot;);">
                      <div class="tab-is-weapon">
                        <div class="tier-container tier-1">
                          <div class="mods-container tier-1">
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;images/shop/items/weapon/close_quarters_psd.png&quot;);"></div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Close Quarters</div>
                              </div>
                            </div>
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;images/shop/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;images/shop/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;images/shop/items/weapon/basic_magazine_psd.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Extended Magazine</div>
                              </div>
                            </div>
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;images/shop/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;images/shop/items/weapon/headshot_booster_psd.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Headshot Booster</div>
                              </div>
                            </div>
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 10px;">High-Velocity Rounds</div>
                              </div>
                            </div>
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Monster Rounds</div>
                              </div>
                            </div>
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Rapid Rounds</div>
                              </div>
                            </div>
                            <div class="mod-box tier-1   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_1.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 12px;">Restorative Shot</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tier-container tier-2">
                          <div class="mods-container tier-2">
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Active Reload</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 10.5px;">Backstabber</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Fleetfoot</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 11px;">Intensifying Magazine</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Kinetic Dash</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Long Range</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Melee Charge</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Mystic Shot</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Opening Rounds</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Slowing Bullets</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spirit_shredder_bullets_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 10px;">Spirit Shredder Bullets
                                </div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Split Shot</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Swift Striker</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Titanic Magazine</div>
                              </div>
                            </div>
                            <div class="mod-box tier-2   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_2.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 12px;">Weakening Headshot</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tier-container tier-3">
                          <div class="mods-container tier-3">
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 12px;">Alchemical Fire</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Berserker</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Blood Tribute</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Burst Fire</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Cultist Sacrifice</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 12.5px;">Escalating Resilience
                                </div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Express Shot</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 11.5px;">Headhunter</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Heroic Aura</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Hollow Point</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Hunter's Aura</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Point Blank</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 9.5px;">Sharpshooter</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Spirit Rend</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Tesla Bullets</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Toxic Bullets</div>
                              </div>
                            </div>
                            <div class="mod-box tier-3   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_3.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Weighted Shots</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tier-container tier-4">
                          <div class="mods-container tier-4">
                            <div class="mod-box tier-4  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 10px;">Armor Piercing Rounds</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Capacitor</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Crippling Headshot</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4  has-component " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Crushing Fists</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Frenzy</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Glass Cannon</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Lucky Shot</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Ricochet</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="active-tag" id="ActiveTag">Active</div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon is-active-item">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Shadow Weave</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Silencer</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 11.5px;">Spellslinger</div>
                              </div>
                            </div>
                            <div class="mod-box tier-4   " style="cursor: default;">
                              <div class="card-background"
                                style="background-image: url(&quot;/images/items/card_weapon_4.png&quot;);"></div>
                              <div class="paper-texture"
                                style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);">
                              </div>
                              <div class="paper-wear"
                                style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);">
                              </div>
                              <div class="mod-icon-container is-weapon ">
                                <div class="mod-icon"
                                  style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                                </div>
                              </div>
                              <div class="mod-name-label-container">
                                <div class="mod-name-label weapon" style="font-size: 13px;">Spiritual Overflow</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> `;
      
        list.innerHTML = out2;
        weaponbuttonpressed = 1;
      }
    }
