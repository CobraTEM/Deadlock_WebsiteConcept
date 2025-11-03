
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
    var vitalitybuttonpressed = 0;
    var spiritbuttonpressed = 0;

    async function weaponShopClick() {

      var element1 = document.getElementById("vitalitycont");
      element1.classList.remove("active");

      const open = document.querySelector('#vitalitycont'); 
      open.style.backgroundImage = "url('images/shop/shop_tab_vitality.png')"; 

      var element1 = document.getElementById("weaponcont");
      element1.classList.add("active");

      const open2 = document.querySelector('#weaponcont'); 
      open2.style.backgroundImage = "url('images/shop/shop_tab_weapon_open.png')"; 

      var element1 = document.getElementById("spiritcont");
      element1.classList.remove("active");
  
      const open3 = document.querySelector('#spiritcont'); 
      open3.style.backgroundImage = "url('images/shop/shop_tab_tech.png')"; 

      try {
        const response = await fetch("items.json");
        const items = await response.json();
        console.log(items);

       /* items = items.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
        });
        */
  
        let list = document.querySelector("#list-output");
        let out2 = `<div class="shop-mod-list" data-aos="fade-down" style="background-image: url(&quot;images/shop/shop_bg_weapon.png&quot;);">
                      <div class="tab-is-weapon">
                        <div class="tier-container tier-1">
                          <div class="mods-container tier-1">
                          <div class="mod-box tier-1" id="462" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[462].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 13px;">${items[462].name}</div>
                                  </div>
                            </div>
                           <div class="mod-box tier-1" id="445" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[445].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 13px;">${items[445].name}</div>
                                  </div>
                            </div>
                            <div class="mod-box tier-1" id="481" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[481].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 13px;">${items[481].name}</div>
                                  </div>
                            </div>
                          <div class="mod-box tier-1" id="457" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[457].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 11px;">${items[457].name}</div>
                                  </div>
                            </div>
                            <div class="mod-box tier-1" id="446" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[446].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 13px;">${items[446].name}</div>
                                  </div>
                            </div>
                            <div class="mod-box tier-1" id="526" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[526].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 13px;">${items[526].name}</div>
                                  </div>
                            </div>
                            <div class="mod-box tier-1" id="651" style="cursor: default;">
                                  <div class="card-background"
                                    style="background-image: url(&quot;images/shop/card_weapon_1.png&quot;);"></div>
                                  <div class="paper-texture"
                                    style="background-image: url(&quot;images/shop/shopitem_papertexture02.png&quot;);">
                                  </div>
                                  <div class="paper-wear"
                                    style="background-image: url(&quot;images/shop/item_paperwear03.png&quot;);"></div>
                                  <div class="mod-icon-container is-weapon ">
                                    <div class="mod-icon"
                                      style="background-image: url(${items[651].shop_image});"></div>
                                  </div>
                                  <div class="mod-name-label-container">
                                    <div class="mod-name-label weapon" style="font-size: 13px;">${items[651].name}</div>
                                  </div>
                            </div>
                          </div>
                        </div>
                        <div class="tier-container tier-2">
                          <div class="mods-container tier-2">
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
                          </div>
                        </div>
                        <div class="tier-container tier-3">
                          <div class="mods-container tier-3">
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
                          </div>
                        </div>
                        <div class="tier-container tier-4">
                          <div class="mods-container tier-4">
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
                          </div>
                        </div>
                      </div>
                    </div> `;
      
        list.innerHTML = out2;
    
          let tip = document.querySelector("#tooltip-output");
          let outy = `<div id="tooltip" class="item-tooltip-container"
                          style=" z-index: 10000; pointer-events: none; display: none;">
                          <div class="citadel-tooltip-mod-details weapon-mod  " >
                            <div id="primary-tooltip-container">
                              <div id="mod-tooltip-container">
                                <div class="header-container weapon-mod"
                                  style="background-image: url(&quot;images/shop/catalog_tooltip_header_weapon_psd.png&quot;);">
                                  <div class="mod-name-container">
                                    <div class="mod-name">${items[462].name}</div>
                                    <div class="mod-cost-container">
                                      <div class="mod-cost"><img class="gold-icon" alt="Soul Icon"
                                          src="images/shop/icon_soul.svg">${items[462].cost}</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="properties-container"
                                  style="background-image: url(&quot;images/shop/catalog_tooltip_bg_weapon_psd.png&quot;);">
                                  <div id="stats-applied-container">
                                    <div class="stats-applied-background">
                                      <div id="attributes-section-innate-0">
                                        <div class="attribute-line-item "><span class="attribute-value-group">
                                        <span class="attribute-bonus-fix ">+</span><span class="attribute-bonus-value ">${items[462].properties.MeleeResistPercent.value}</span>
                                        <span class="attribute-bonus-fix ">${items[462].properties.MeleeResistPercent.postfix}</span></span><span class="attribute-bonus-name"> ${items[462].properties.MeleeResistPercent.label}</span></div>
                                      </div>
                                    </div>
                                    <div id="ability-type-passive-1" class="cooldown-header ">
                                      <div class="active-passive-label">${items[462].tooltip_sections.section_type}</div>
                                    </div>
                                    <div class="stats-applied-background">
                                      <div id="attributes-section-passive-1">
                                        <div class="mod-info-label">
                                          <div>Deal additional <span class="highlight">Weapon Damage</span> when in <span
                                              class="highlight">close range</span> to your target.</div>
                                        </div>
                                        <div class="stats-flex-container one-important-with-regular-props">
                                          <div class="important-stats-wrapper one-important-with-regular-props">
                                            <div class="important-stat-box prop-bullet-damage">
                                              <div class="stat-scaling-container"></div>
                                              <div class="important-stat-image-value-container"><img alt="Weapon Damage"
                                                  class="important-stat-image prop-bullet-damage"
                                                  src="https://assets-bucket.deadlock-api.com/assets-api-res/icons/damage_bullet_color.svg">
                                                <div id="important-stat-value" class="">+20<span class="attribute-bonus-fix">%</span></div>
                                              </div>
                                              <div class="important-stat-labels-container">
                                                <div class="important-stat-type prop-bullet-damage">Weapon Damage</div>
                                                <div class="important-stat-label">Conditional</div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="standard-attribute-container one-important-with-regular-props">
                                            <div class="attribute-line-item "><span class="attribute-value-group"><span
                                                  class="attribute-bonus-fix "></span><span class="attribute-bonus-value ">15</span><span
                                                  class="attribute-bonus-fix ">m</span></span><span class="attribute-bonus-name"> Close
                                                Range</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div id="components-container">
                                    <div class="components-label">UPGRADES TO:</div>
                                    <div id="components-list">
                                      <div class="component-mod">
                                        <div class="component-of-mod-icon-container is-weapon-component">
                                          <div class="component-of-mod-icon"
                                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank_sm.webp&quot;);">
                                          </div>
                                        </div>
                                        <div class="component-mod-details">
                                          <div class="component-mod-name">Point Blank</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;
          tip.innerHTML = outy;
    
          var closequarters = document.getElementById('462');
          var extendedmagazine = document.getElementById('445');
          const tooltipText = document.querySelector("#tooltip");
          closequarters.addEventListener("mouseover", showTooltip);
          closequarters.addEventListener("mouseleave", removeTooltip);
          extendedmagazine.addEventListener("mouseover", showTooltip);
          extendedmagazine.addEventListener("mouseleave", removeTooltip);
    
          function showTooltip() {
            tooltipText.style.display = "block";
          }
          function removeTooltip() {
            tooltipText.style.display = "none";
          }
    }
    catch(error){
      console.error(error);
    }
        
        weaponbuttonpressed = 1;
        vitalitybuttonpressed = 0;
        spiritbuttonpressed = 0;
      }
      
    

      function vitalityShopClick() {

        var element1 = document.getElementById("weaponcont");
        element1.classList.remove("active");
  
        const open2 = document.querySelector('#weaponcont'); 
        open2.style.backgroundImage = "url('images/shop/shop_tab_weapon.png')"; 

        var element1 = document.getElementById("vitalitycont");
        element1.classList.add("active");

        var element1 = document.getElementById("spiritcont");
        element1.classList.remove("active");
    
        const open3 = document.querySelector('#spiritcont'); 
        open3.style.backgroundImage = "url('images/shop/shop_tab_tech.png')"; 
  
        const open = document.querySelector('#vitalitycont'); 
        open.style.backgroundImage = "url('images/shop/shop_tab_vitality_open.png')"; 
  
          let list = document.querySelector("#list-output");
          let out2 = `<div class="shop-mod-list" data-aos="fade-down" style="background-image: url(&quot;images/shop/shop_bg_vitality.png&quot;);">
    <div class="tab-is-vitality">
        <div class="tier-container tier-1">
            <div class="mods-container tier-1">
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Extra Health</div>
                    </div>
                </div>
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Extra Regen</div>
                    </div>
                </div>
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Extra Stamina</div>
                    </div>
                </div>
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Healing Rite</div>
                    </div>
                </div>
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Melee Lifesteal</div>
                    </div>
                </div>
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Rebuttal</div>
                    </div>
                </div>
                <div class="mod-box tier-1   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_1.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Sprint Boots</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tier-container tier-2">
            <div class="mods-container tier-2">
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Battle Vest</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Bullet Lifesteal</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Debuff Reducer</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Enchanter's Emblem</div>
                    </div>
                </div>
                <div class="mod-box tier-2  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Enduring Speed</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Guardian Ward</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Healbane</div>
                    </div>
                </div>
                <div class="mod-box tier-2  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Healing Booster</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Reactive Barrier</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Restorative Locket</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Return Fire</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Spirit Lifesteal</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Spirit Shielding</div>
                    </div>
                </div>
                <div class="mod-box tier-2   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_2.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Weapon Shielding</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tier-container tier-3">
            <div class="mods-container tier-3">
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Bullet Resilience</div>
                    </div>
                </div>
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 12px;">Counterspell</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Debuff Remover</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Fortitude</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Fury Trance</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Healing Nova</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Lifestrike</div>
                    </div>
                </div>
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Majestic Leap</div>
                    </div>
                </div>
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Metal Skin</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Rescue Beam</div>
                    </div>
                </div>
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Spirit Resilience</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture01.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask01.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Stamina Mastery</div>
                    </div>
                </div>
                <div class="mod-box tier-3  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Trophy Collector</div>
                    </div>
                </div>
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Veil Walker</div>
                    </div>
                </div>
                <div class="mod-box tier-3   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_3.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Warp Stone</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tier-container tier-4">
            <div class="mods-container tier-4">
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Cheat Death</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Colossus</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Divine Barrier</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Diviner's Kevlar</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Healing Tempo</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Infuser</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Inhibitor</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Juggernaut</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture03.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask03.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Leech</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Phantom Strike</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Plated Armor</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear03.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Siphon Bullets</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 12px;">Spellbreaker</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear01.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 12px;">Unstoppable</div>
                    </div>
                </div>
                <div class="mod-box tier-4  has-component " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="active-tag" id="ActiveTag">Active</div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear02.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality is-active-item">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Vampiric Burst</div>
                    </div>
                </div>
                <div class="mod-box tier-4   " style="cursor: default;">
                    <div class="card-background"
                        style="background-image: url(&quot;/images/items/card_vitality_4.png&quot;);"></div>
                    <div class="paper-texture"
                        style="background-image: url(&quot;/images/items/shopitem_papertexture02.png&quot;);"></div>
                    <div class="paper-wear"
                        style="background-image: url(&quot;/images/items/shopitem_paperwear04.png&quot;);"></div>
                    <div class="mod-icon-container is-vitality ">
                        <div class="mod-icon"
                            style="background-image: url(&quot;https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail_sm.webp&quot;); mask-image: url(&quot;/images/items/icon_mask02.png&quot;);">
                        </div>
                    </div>
                    <div class="mod-name-label-container">
                        <div class="mod-name-label vitality" style="font-size: 13px;">Witchmail</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        
          list.innerHTML = out2;
          weaponbuttonpressed = 0;
          vitalitybuttonpressed = 1;
          spiritbuttonpressed = 0;
        }

        function spiritShopClick() {

          var element1 = document.getElementById("vitalitycont");
          element1.classList.remove("active");
    
          const open = document.querySelector('#vitalitycont'); 
          open.style.backgroundImage = "url('images/shop/shop_tab_vitality.png')"; 

          var element1 = document.getElementById("weaponcont");
          element1.classList.remove("active");
    
          const open3 = document.querySelector('#weaponcont'); 
          open3.style.backgroundImage = "url('images/shop/shop_tab_weapon.png')"; 
    
          var element1 = document.getElementById("spiritcont");
          element1.classList.add("active");
    
          const open2 = document.querySelector('#spiritcont'); 
          open2.style.backgroundImage = "url('images/shop/shop_tab_tech_open.png')"; 
    
            let list = document.querySelector("#list-output");
            let out3 = `<div class="shop-mod-list" data-aos="fade-down"
                          style="background-image: url(&quot;images/shop/shop_bg_tech.png&quot;);">
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
          
            list.innerHTML = out3;
            weaponbuttonpressed = 0;
            vitalitybuttonpressed = 0;
            spiritbuttonpressed = 1;
          }
    
