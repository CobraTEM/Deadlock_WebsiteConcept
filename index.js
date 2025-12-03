
window.onload= function(){ loadTextBIG(); loadTextSMALL(); }

    
const weaponaudioArray = ["audio/ui_shop_mod_hover_weapon_01.mp3", "audio/ui_shop_mod_hover_weapon_02.mp3", "audio/ui_shop_mod_hover_weapon_03.mp3", 
  "audio/ui_shop_mod_hover_weapon_04.mp3", "audio/ui_shop_mod_hover_weapon_05.mp3", "audio/ui_shop_mod_hover_weapon_06.mp3", 
  "audio/ui_shop_mod_hover_weapon_07.mp3", "audio/ui_shop_mod_hover_weapon_08.mp3", "audio/ui_shop_mod_hover_weapon_09.mp3", 
  "audio/ui_shop_mod_hover_weapon_10.mp3", "audio/ui_shop_mod_hover_weapon_11.mp3"];  
  
  const arpbell = ["audio/arp/music_hideout_arp_bell_71.mp3", "audio/arp/music_hideout_arp_bell_70.mp3", "audio/arp/music_hideout_arp_bell_69.mp3","audio/arp/music_hideout_arp_bell_68.mp3","audio/arp/music_hideout_arp_bell_67.mp3","audio/arp/music_hideout_arp_bell_66.mp3","audio/arp/music_hideout_arp_bell_65.mp3","audio/arp/music_hideout_arp_bell_64.mp3","audio/arp/music_hideout_arp_bell_63.mp3","audio/arp/music_hideout_arp_bell_62.mp3","audio/arp/music_hideout_arp_bell_61.mp3","audio/arp/music_hideout_arp_bell_60.mp3"];    
  
function playRandomWeaponAudio() {
const audioIndex = Math.floor(Math.random() * weaponaudioArray.length);
const weaponhoveraudio = new Audio(weaponaudioArray[audioIndex]);
weaponhoveraudio.play();
};

function playRandomArpAudio() {
  const audioIndex = Math.floor(Math.random() * arpbell.length);
  const arpbellaudio = new Audio(arpbell[audioIndex]);
  arpbellaudio.volume = 0.2;
  arpbellaudio.play();
  };

const kaboosharray = ["audio/ui_menu_press_big_01.mp3", "audio/ui_menu_press_big_02.mp3", "audio/ui_menu_press_big_03.mp3", 
  "audio/ui_menu_press_big_04.mp3"];     
  
function playKabooshAudio() {
const audioIndex = Math.floor(Math.random() * kaboosharray.length);
const kabooshaudio = new Audio(kaboosharray[audioIndex]);
kabooshaudio.play();
};

const rosteraudioArray = ["audio/ui_roster_card_hover_01.mp3", "audio/ui_roster_card_hover_02.mp3", "audio/ui_roster_card_hover_03.mp3", 
  "audio/ui_roster_card_hover_04.mp3", "audio/ui_roster_card_hover_05.mp3", "audio/ui_roster_card_hover_06.mp3", 
  "audio/ui_roster_card_hover_07.mp3", "audio/ui_roster_card_hover_08.mp3", "audio/ui_roster_card_hover_09.mp3", 
  "audio/ui_roster_card_hover_10.mp3"];  

      function playRandomRosterAudio() {
  const audioIndex2 = Math.floor(Math.random() * rosteraudioArray.length);
  const rosteraudio = new Audio(rosteraudioArray[audioIndex2]);
  rosteraudio.play();
  rosteraudio.volume = 0.2;
};

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

      const ability1button = document.querySelector("#Ability1");
      const ability2button = document.getElementById("Ability2");
      const ability3button = document.getElementById("Ability3");
      const ability4button = document.getElementById("Ability4");

      async function StatsAdd() {

        try {
  
  
          const response = await fetch("heroes.json");
          const hero = await response.json();
          var Id = document.body.id;
  
  
          let list = document.querySelector("#statses-output");
  
          let out = `<div data-aos="fade-up" data-aos-duration="2000"  data-aos-anchor-placement="bottom" class="DivideUpdates">
  <div style="pointer-events: auto; display: block; margin: 25px; " id="WeaponStats" class="NoSecondaryWeaponDesc CitadelHeroStatsWeapon">
      <div id="BackgroundContainer">
      <div id="WeaponInfoContainer">
        <img id="GunImage" src="${hero[Id].images.weapon_image}" scaling="cover">
        <div class="weaponNameAndAttributes TopBottomFlow">
          <div class="statTitle">WEAPON STATS</div>
          <div class="WeaponName">${hero[Id].gun_tag}</div>
          <div id="WeaponAttributesContainer" class="LeftRightFlow">
            <div class="${hero[Id].stats.WeaponStats.primary_tab.WeaponTag.Tag1.isactive}">
              <div class="AttributeLabelTag">${hero[Id].stats.WeaponStats.primary_tab.WeaponTag.Tag1.name}</div>
            </div>
            <div class="${hero[Id].stats.WeaponStats.primary_tab.WeaponTag.Tag2.isactive}">
              <div class="AttributeLabelTag">${hero[Id].stats.WeaponStats.primary_tab.WeaponTag.Tag2.name}</div>
            </div>
             <div class="${hero[Id].stats.WeaponStats.primary_tab.WeaponTag.Tag3.isactive}">
              <div class="AttributeLabelTag">${hero[Id].stats.WeaponStats.primary_tab.WeaponTag.Tag3.name}</div>
            </div>
          </div>
        </div>
        <div id="BulletDPSContainer">
          <div id="StatContainer_DPS" class="StatElement statAttributeContainerDPS">
            <div id="AttributeLabel" class="HasStatImage CitadelModifiedAttributeLabel">
              <div class="LabelsContainer">
                <div class="StatImageArea">
                  <div id="StatImage" class="StatImage StatDesc_DPS"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText">
                  <div id="BaseLabel">${hero[Id].stats.WeaponStats.primary_tab.DPS}</div>
                </div>
              </div>
              <div id="AdditionalText">DPS</div>
            </div>
          </div>
        </div>
        <div id="WeaponFalloffRange">
          <div class="FalloffLabel">FALLOFF RANGE</div>
          <div id="WeaponRangeContainer" class="">
            <div id="WeaponMinRangeContainer">
              <div style="text-align: center; " id="StatContainer_WeaponRangeFalloffMin" class="StatElement statAttributeContainer2">
                <div id="AttributeLabel2" class=" CitadelModifiedAttributeLabel">
                  <div class="LabelsContainer">
                    <div class="LabelsText2">
                      <div id="BaseLabel">${hero[Id].stats.WeaponStats.primary_tab.FalloffMin}<span style="color: gray;">m</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="RangeArrow"></div>
              <div id="WeaponMaxRangeContainer">
                <div style="text-align: center; " id="StatContainer_WeaponRangeFalloffMax" class="StatElement statAttributeContainer2">
                  <div id="AttributeLabel2" class=" CitadelModifiedAttributeLabel">
                    <div class="LabelsContainer">
                      <div class="LabelsText2">
                        <div id="BaseLabel">${hero[Id].stats.WeaponStats.primary_tab.FalloffMax}<span style="color: gray;">m</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div id="WeaponDisplayStats" class="displayStatsContainer">
        <div class="weaponDesc ${hero[Id].stats.WeaponStats.primary_tab.WeaponDescOpt.isactive}">${hero[Id].stats.WeaponStats.primary_tab.WeaponDescOpt.text}</div>
        <div id="InitialWeaponStatsContainer" class="statsContainer">
         <div id="BulletDamage" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletDamage"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.BulletDamage.value}</div>
              </div>
            </div>
            <div id="AdditionalText2">Bullet Damage</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.BulletDamage.spiritscaling}"></div>
        </div>
        <div id="BulletPerSec" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletPerSec"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.BulletsPerSec.value}</div>
              </div>
            </div>
            <div id="AdditionalText2">Bullets per sec</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.BulletsPerSec.spiritscaling}"></div>
        </div>
        <div id="Ammo" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_Ammo"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.Ammo.value}</div>
              </div>
            </div>
            <div id="AdditionalText2">Ammo</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.Ammo.spiritscaling}"></div>
        </div>
        <div id="ReloadTime" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_ReloadTime"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.ReloadTime.value}<span style="color: gray; font-family: "Retail"">s</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Reload Time</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.ReloadTime.spiritscaling}"></div>
        </div>
        <div id="BulletVelocity" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletVelocity"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.BulletVelocity.value}<span style="color: gray; font-family: "Retail"; ">m/s</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Bullet Velocity</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.BulletVelocity.spiritscaling}"></div>
        </div>
        <div id="BulletLifeSteal" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletLifeSteal"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.BulletLifesteal.value}<span style="color: gray; font-family: "Retail"">%</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Bullet Lifesteal</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.BulletLifesteal.spiritscaling}"></div>
        </div>
        <div id="WeaponDamage" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletDamage"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.WeaponDamage.value}<span style="color: gray; font-family: "Retail"">%</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Weapon Damage</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.WeaponDamage.spiritscaling}"></div>
        </div>
        <div id="FireRate" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletPerSec"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.FireRate.value}<span style="color: gray; font-family: "Retail";">%</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Fire Rate</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.FireRate.spiritscaling}"></div>
        </div>
        <div id="ClipSizeIncrease" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_Ammo"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.ClipSizeIncrease.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Clip Size Increase</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.ClipSizeIncrease.spiritscaling}"></div>
        </div>
        <div id="ReloadReduction" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_ReloadTime"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.ReloadReduction.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Reload Reduction</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.ReloadReduction.spiritscaling}"></div>
        </div>
        <div id="BulletVelocityIncrease" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_BulletVelocity"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.BulletVelocityIncrease.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div style="font-size: 14.5px;" id="AdditionalText2">Bullet Velocity Increase</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.BulletVelocityIncrease.spiritscaling}"></div>
        </div>
        <div id="CritBonusScale" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_CritBonusScale"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.CritBonusScale.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText2">Crit Bonus Scale</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.CritBonusScale.spiritscaling}"></div>
        </div>
      </div>
    </div>
    <div style="margin-top: 1px;" id="WeaponOtherStatsDisplay" class="displayStatsContainer otherStats">
      <div style=" max-height: 50px;" id="OtherWeaponStatsContainer" class="statsContainer">
        <div id="LightMelee" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_LightMelee"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.LightMelee.value}</div>
              </div>
            </div>
            <div id="AdditionalText2">Light Melee</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.LightMelee.spiritscaling}"></div>
        </div>
        <div id="HeavyMelee" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_HeavyMelee"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.WeaponStats.secondary_tab.HeavyMelee.value}</div>
              </div>
            </div>
            <div id="AdditionalText2">Heavy Melee</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.WeaponStats.secondary_tab.HeavyMelee.spiritscaling}"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div style="pointer-events: auto; display: block; margin: 25px;" id="VitalityStats" class="CitadelHeroArmor">
    <div id="BackgroundContainer">
      <div id="ArmorDisplayStats" class="displayStatsContainer">
        <div style="padding-bottom: 10px;" class="statTitle">VITALITY STATS</div>
        <div id="InitialVitalityStatsContainer" class="statsContainer2">
          <div id="MaxHealth" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_MaxHealth"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.MaxHealth.value}</div>
                </div>
              </div>
              <div id="AdditionalText3">Max Health</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.MaxHealth.spiritscaling}"></div>
          </div>
          <div id="HealAmp" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_HealAmp"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.HealAmp.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Heal Amp</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.HealAmp.spiritscaling}"></div>
          </div>
          <div id="BulletResist" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_BulletResist"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.BulletResist.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Bullet Resist</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.BulletResist.spiritscaling}"></div>
          </div>
          <div id="MeleeResist" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_MeleeResist"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.MeleeResist.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Melee Resist</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.MeleeResist.spiritscaling}"></div>
          </div>
          <div id="CritReduction" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_CritBonusScale"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.CritReduction.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Crit Reduction</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.CritReduction.spiritscaling}"></div>
          </div>
          <div id="HealthRegen" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_HealthRegen"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.HealthRegen.value}</div>
                </div>
              </div>
              <div id="AdditionalText3">Health Regen</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.HealthRegen.spiritscaling}"></div>
          </div>
          <div id="NonCombatHealthRegen" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_HealthRegen"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.NonCombatRegen.value}</div>
                </div>
              </div>
              <div id="AdditionalText3">Non-Combat Regen</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.NonCombatRegen.spiritscaling}"></div>
          </div>
          <div id="SpiritResist" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_SpiritResist"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.SpiritResist.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Spirit Resist</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.SpiritResist.spiritscaling}"></div>
          </div>
          <div id="DebuffResist" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_DebuffResist"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.primary_tab.DebuffResist.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Debuff Resist</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.primary_tab.DebuffResist.spiritscaling}"></div>
          </div>
        </div>
      </div>
      <div id="ArmorOtherDisplayStats" style="margin-top: 70.5px; " class="displayStatsContainer otherStats">
        <div style=" max-height: 150px;" id="ArmorOtherDisplayStats" class="statsContainer">
          <div id="MoveSpeed" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_MoveSpeed"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.secondary_tab.MoveSpeed.value}<span style="color: gray;">m/s</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Move Speed</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.secondary_tab.MoveSpeed.spiritscaling}"></div>
          </div>
          <div id="StaminaCooldown" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_StaminaCooldown"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.secondary_tab.StaminaCooldown.value}<span style="color: gray;">s</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Stamina Cooldown</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.secondary_tab.StaminaCooldown.spiritscaling}"></div>
          </div>
          <div id="Stamina" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_Stamina"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.secondary_tab.Stamina.value}</div>
                </div>
              </div>
              <div id="AdditionalText3">Stamina</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.secondary_tab.Stamina.spiritscaling}"></div>
          </div>
          <div id="SprintSpeed" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_SprintSpeed"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.secondary_tab.SprintSpeed.value}<span style="color: gray;">m/s</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Sprint Speed</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.secondary_tab.SprintSpeed.spiritscaling}"></div>
          </div>
          <div id="StaminaRecovery" class="StatElement statAttributeContainer">
            <div id="AttributeLabelStats" class="HasStatImage2">
              <div class="LabelsContainer">
                <div class="StatImageArea2">
                  <div id="StatImage2" class="StatImage2 StatDesc_StaminaCooldown"></div>
                  <div class="NewOverride">NEW</div>
                </div>
                <div class="LabelsText2">
                  <div id="BaseLabel2">${hero[Id].stats.VitalityStats.secondary_tab.StaminaRecovery.value}<span style="color: gray;">%</span></div>
                </div>
              </div>
              <div id="AdditionalText3">Stamina Recovery</div>
           </div>
           <div id="SpiritInc" class="${hero[Id].stats.VitalityStats.secondary_tab.StaminaRecovery.spiritscaling}"></div>
          </div>
  </div>
</div>
</div>
</div>
<div style="pointer-events: auto; display: block; padding-top: 1px; margin: 25px;" id="SpiritStats" class="CitadelHeroSpirit">
  <div id="BackgroundContainer">
    <div id="SpiritDisplayStats" class="displayStatsContainer">
      <div style="padding-bottom: 10px;" class="statTitle">SPIRIT STATS</div>
      <div id="InitialSpiritStatsContainer" class="statsContainer3">
        <div id="AbilityCooldown" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_AbilityCooldown"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.AbilityCooldown.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText3">Ability Cooldown</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.AbilityCooldown.spiritscaling}"></div>
        </div>
        <div id="AbilityRange" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_AbilityRange"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.AbilityRange.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText3">Ability Range</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.AbilityRange.spiritscaling}"></div>
        </div>
        <div id="MaxChargesIncrease" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_MaxChargesIncrease"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.MaxChargesIncrease.value}</div>
              </div>
            </div>
            <div id="AdditionalText3">Max Charges Increase</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.MaxChargesIncrease.spiritscaling}"></div>
        </div>
        <div id="AbilityDuration" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_AbilityDuration"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.AbilityDuration.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText3">Ability Duration</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.AbilityDuration.spiritscaling}"></div>
        </div>
        <div id="SpiritLifesteal" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_SpiritLifesteal"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.SpiritLifesteal.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText3">Spirit Lifesteal</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.SpiritLifesteal.spiritscaling}"></div>
        </div>
        <div id="ChargeCooldown" class="StatElement statAttributeContainer">
          <div id="AttributeLabelStats" class="HasStatImage2">
            <div class="LabelsContainer">
              <div class="StatImageArea2">
                <div id="StatImage2" class="StatImage2 StatDesc_ChargeCooldown"></div>
                <div class="NewOverride">NEW</div>
              </div>
              <div class="LabelsText2">
                <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.ChargeCooldown.value}<span style="color: gray;">%</span></div>
              </div>
            </div>
            <div id="AdditionalText3">Charge Cooldown</div>
         </div>
         <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.ChargeCooldown.spiritscaling}"></div>
        </div>
      </div>
    </div>
    <div id="SpiritImpactContainer">
      <div style="height: 320px; display: inline-flex; width: 100%;"  class="SpiritPower">
        <div id="SpiritValueContainer">
          <div class="SpiritPowerImpactLabel">SPIRIT POWER IMPACT</div>
            <div id="SpiritPowerStat" class="StatElement statAttributeContainer3">
              <div id="AttributeLabelStats" class="HasStatImage2">
                <div class="LabelsContainer">
                  <div class="StatImageArea2">
                    <div id="StatImage2" class="StatImage2 StatDesc_Spirit"></div>
                    <div class="NewOverride">NEW</div>
                  </div>
                  <div class="LabelsText2">
                    <div id="BaseLabel2">${hero[Id].stats.SpiritStats.primary_tab.SpiritPower.value}</div>
                  </div>
                </div>
                <div id="AdditionalText3">Spirit Power</div>
             </div>
             <div id="SpiritInc" class="${hero[Id].stats.SpiritStats.primary_tab.SpiritPower.spiritscaling}"></div>
           </div>
         <div class="SpiritPowerDesc">Spirit Power increases the effectiveness of your Abilities and Items.</div>
        </div>
        <div id="ModifiedAbilitesPanel" class="CitadelModifiedAbilities noModifiedAbilities">
          <div id="InnateModified" class="modifiedContainer"></div>
          <div id="AbilitiesModified" class="modifiedContainer">
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect1.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect1.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect1.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect1.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect1.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect2.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect2.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect2.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect2.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect2.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect3.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect3.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect3.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect3.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect3.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect4.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect4.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect4.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect4.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect4.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>    
                    <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect5.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect5.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect5.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect5.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect5.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect6.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect6.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect6.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect6.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect6.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect7.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect7.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect7.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect7.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect7.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect8.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect8.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect8.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect8.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect8.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>    
             <div id="AffectedStat_EStatsCount" class="ModifiedStatsPanel AffectedAbility ${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect9.active}">
                <div id="Icon">
                  <div id="StatAbilityImage"><img id="AbilityImage" src="${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect9.Icon}" scaling="stretch"></div>
                </div>
                <div id="AffectedPropertiesContainer">
                  <div id="Property_Radius" class="AffectedAbilityProperty">
                    <div class="PropertyNameContainer">
                      <div class="AffectedPropertyName">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect9.effect}</div>
                    </div>
                    <div class="AffectedPropertyDeltaContainer">
                      <div class="AffectedValCur">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect9.value}<span style="padding-left: 5px; color: gray;">${hero[Id].stats.SpiritStats.secondary_tab.AbilityAffect9.suffix}</span></div>
                    </div>
                </div>
             </div>
          </div>               
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>`
          list.innerHTML = out;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }


      async function AddTags() {

        try {
  
  
          const response = await fetch("heroes.json");
          const hero = await response.json();
          var Id = document.body.id;
  
          let list = document.querySelector("#tag-output");
  
          let out = `      <div class="HeroTags">
        <div class="heroTag Tag1">
          <div class="tagBacker ${hero[Id].color[0]}">${hero[Id].tags[0]}</div>
        </div>
        <div class="heroTag Tag2">
          <div class="tagBacker ${hero[Id].color[0]}">${hero[Id].tags[1]}</div>
        </div>
        <div class="heroTag Tag3">
          <div class="tagBacker ${hero[Id].color[0]}">${hero[Id].tags[2]}</div>
        </div>
      </div>`
          list.innerHTML = out;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }

      async function AddHeroRender() {

        try {
  
  
          const response = await fetch("heroes.json");
          const hero = await response.json();
          var Id = document.body.id;
  
          let list = document.querySelector("#HeroScenePanel");
  
          let out = `      <img data-aos="fade-left" data-aos-duration="2000"  data-aos-anchor-placement="right-bottom" class="imagesize" src="${hero[Id].images.selection_image}">      `
          list.innerHTML = out;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }

      async function AbilityIcons() {

        try {
  


          const response = await fetch("heroes.json");
          const hero = await response.json();
          var Id = document.body.id;
  
  
          let list = document.querySelector("#table-output");
          let list2 = document.querySelector("#table2-output");
  
          let out = `
         <table class="TableSkillsAbility">
          <tr style="font-size:14px; height:50px; text-align:center;">
           <td>
              <a onclick="Ability1Change();" style="text-decoration: none; pointer-events:auto;" id="Ability1"  href="#AbilitySelect">
                <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                  <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                  <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                    <div><span><img src="${hero[Id].icons.ability1}" decoding="async" width="69" height="69"></span>
                    </div>
                  </div>
                </div>
              </a>
              <a onclick="Ability2Change();" style="text-decoration: none; pointer-events:auto;" id="Ability2"  href="#AbilitySelect">
                <div class="abilityImage " style="display:inline-block; width:100px; height:100px;">
                  <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                  <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                    <div><span><img src="${hero[Id].icons.ability2}" decoding="async" width="69" height="69"></span>
                    </div>
                  </div>
                </div>
              </a>
              <a onclick="Ability3Change();" style="text-decoration: none; pointer-events:auto;" id="Ability3" href="#AbilitySelect">
                <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                  <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                  <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                    <div><span><img src="${hero[Id].icons.ability3}" decoding="async" width="69" height="69"></span>
                    </div>
                  </div>
                </div>
              </a>
             <a onclick="Ability4Change();" style="text-decoration: none; pointer-events:auto;" id="Ability4" href="#AbilitySelect">
                <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                  <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                  <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                    <div><span><img src="${hero[Id].icons.ability4}" decoding="async" width="69" height="69"></span>
                    </div>
                  </div>
                </div>
              </a>
              </div>
             </div>
            </td>
           </tr>
           </table>`
           let out2 = `
           <table class="TableSkills">
            <tr style="font-size:14px; height:50px; text-align:center;">
             <td>
                <a onclick="Ability1Change();" style="text-decoration: none;">
                  <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                    <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                    <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                      <div><span><img src="${hero[Id].icons.ability1}" decoding="async" width="69" height="69"></span>
                      </div>
                    </div>
                  </div>
                </a>
                <a onclick="Ability2Change();" style="text-decoration: none;">
                  <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                    <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                    <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                      <div><span><img src="${hero[Id].icons.ability2}" decoding="async" width="69" height="69"></span>
                      </div>
                    </div>
                  </div>
                </a>
                <a onclick="Ability3Change();" style="text-decoration: none;">
                  <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                    <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                    <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                      <div><span><img src="${hero[Id].icons.ability3}" decoding="async" width="69" height="69"></span>
                      </div>
                    </div>
                  </div>
                </a>
               <a onclick="Ability4Change();" style="text-decoration: none;"">
                  <div class="abilityImage" style="display:inline-block; width:100px; height:100px;">
                    <div class="abilityImageRe ${hero[Id].color[1]}"><img src="images/abilities/Passive_ability_frame.png" decoding="async" width="100" height="100"></div>
                    <div class="ability-icon" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center;">
                      <div><span><img src="${hero[Id].icons.ability4}" decoding="async" width="69" height="69"></span>
                      </div>
                    </div>
                  </div>
                </a>
                </div>
               </div>
              </td>
             </tr>
             </table>`
          list.innerHTML = out2;
          list2.innerHTML = out;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }

      async function AddNameImage() {

        try {
  
  
          const response = await fetch("heroes.json");
          const hero = await response.json();
  
          var Id = document.body.id;

          let list2 = document.querySelector("#name-output");
  
          let out4 = `<img class="HeroLogo" src="${hero[Id].images.name_image}">`
          list2.innerHTML = out4;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }

      async function AddBottomFooterNav() {

        try {
  
  
          const response = await fetch("heroes.json");
          const hero = await response.json();
  
          var Id = document.body.id;

          let list2 = document.querySelector("#footer2-output");
  
          let out = `
        <a style="text-decoration:none; overflow: hidden; border-right: 2px solid grey;" class="HeroSelect-container Goleftbro" href="${hero[Id.length--].name}.html">
        <img style="margin-bottom: -30px;" class="HeroImage" src="${hero[Id.length--].images.selection_image}">
          <div class="HeroSelectText-container">
            <div class="HeroSelectText-small" style="text-decoration:none;">Previous Hero</div>
            <div class="HeroSelectText-big" style="text-decoration:none;">${hero[Id.length--].name}</div>
          </div>
        </a><a style="text-decoration:none;" class="HeroBoxContainer" href="heroes.html">
          <div class="TableFlexContainer">
            <div class="BoxFlex"></div>
          </div>
          <div class="TableFlexText">All Heroes </div>
        </a>
        <a style="text-decoration:none; overflow: hidden; border-left: 2px solid grey;" class="HeroSelect-container" href="${hero[Id.length+1].name}.html">
          <img style="margin-bottom: -10px;" class="HeroImage" src="${hero[Id.length+1].images.selection_image}">
          <div class="HeroSelectText-container">
            <div class="HeroSelectText-small" style="text-decoration:none;" >Next Hero</div>
            <div class="HeroSelectText-big" style="text-decoration:none;" >${hero[Id.length+1].name}</div>
          </div>
        </a>`
          list2.innerHTML = out;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }

      async function BackstoryAdd() {

        try {
  
  
          const response = await fetch("heroes.json");
          const hero = await response.json();
  
          var Id = document.body.id;
  
          let list = document.querySelector("#Backstory-output");
  
          let out = `<div class="BackstoryContainer">${hero[Id].lore}</div>`
          list.innerHTML = out;
          
  
        }
        catch(error){
          console.error(error);
        }
  
      }

async function Ability1Change() {

      try {


        const response = await fetch("heroes.json");
        const hero = await response.json();
        var Id = document.body.id;

        let list = document.querySelector("#video-output");
        let list2 = document.querySelector("#AbilityStats-output");

        let out = `<video class="AbilityVideo" autoplay="" preload="auto" loop="" playsinline=""><source type="video/webm" src="${hero[Id].videos.abilityvid1}"></video>`
        let out2 = `        <div data-aos="fade-up" data-aos-duration="2000"  data-aos-anchor-placement="bottom" id="SiphonLife" class="AbilityContainer">
          <div style="width: 100%">
            <div class="AbilityHeaderContainer">
              <div class="AbilityHeaderTop">
                <div style="font-size: 1.3rem;">
                  <p><span style="filter: brightness(0) saturate(100%) invert(98%) sepia(19%) saturate(1458%) hue-rotate(301deg) brightness(102%) contrast(109%); padding: 0 15px 0 6px;"><img src="images/abilities/abrams/bull_drain_psd.png" decoding="async" width="45" height="45"></span><span style="font-family:'Retail'; font-weight: bold;">Siphon Life</span>
                  </p>
                </div>
                <div class="AbilityHeaderFlex">
                  <p><br>
                  </p>
                  <p><br>
                  </p>
                  <div class="AbilityStatsMainContainer">
                    <span class="AbilityStatsIconGrey"><span title="Radius"><img alt="Radius" src="images/stats/range.svg" decoding="async" width="20" height="20"></span></span>
                    <span style="font-family:'Retail'; font-weight: bold; color: inherit; padding-left: 3px;">10</span><span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2">m</span>
                  </div>
                  <div style="position: relative;">
                    <div style="position: absolute; top: -13px; right: 12px">
                      <p><span style="font-size: 0.8em; color: #E3BDFA; white-space: nowrap;"><span><img src="images/stats/keystat_spirit_arrow_png.png" decoding="async" width="28" height="20"></span></span></span>
                      </p>
                    </div>
                  </div>
                  <p><br>
                  </p>
                  <div class="AbilityStatsMainContainer">
                    <span class="AbilityStatsIconGrey"><span title="Duration"><img alt="Duration" src="images/stats/duration.svg" decoding="async" width="20" height="20"></span></span>
                    <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit; padding-left: 3px;">4</span><span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2">s</span>
                  </div>
                </div>
              </div>
              <div style="display:flex; flex-direction:column; align-items: end; justify-content: flex-end;">
                <div
                  style="display:flex; flex-direction:row; justify-content: flex-end; margin-bottom: 5px; margin-right: 20px;">
                  <p><br>
                  </p>
                  <p><br>
                  </p>
                </div>
                <div style="background-color: #2C2C2C; padding: 10px 6px 10px 6px; margin-right: 20px; white-space: nowrap;">
                  <span class="AbilityStatsIconGrey">
                  <span title="Cooldown">
                  <img alt="Cooldown" src="images/stats/cooldown.svg" decoding="async" width="20" height="20">
                </span>
                </span>
                <span style="font-family:'Retail'; font-weight:bold; color: inherit; padding-left: 7px;">42</span>
                <span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2">s</span>
              </span>
                </div>
              </div>
            </div>
          </div>
        <div style="margin: 5px 10px 0px 10px; padding: 3px 0 5px 0; width: calc(100% - 18px); box-sizing: unset;">
            <div style="display:flex; flex-direction:column; align-items: center; width: 100%">
              <div style="padding: 0 10px 0 10px">Drain health from nearby enemies in front of you, dealing 
                <span style="text-wrap:nowrap; font-weight:bold; color:#bc8ee8;"><span style="position: relative;">
                <span><img src="images/stats/damage_magic_color.svg" decoding="async" width="12" height="12"></span></span></span><span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:#bc8ee8;">spirit damage over time</span></span> and <span style="text-wrap:nowrap; font-weight:bold; color:#13f278;"><span style="position: relative; bottom: 2px; filter: brightness(0)saturate(100%)invert(66%)sepia(32%)saturate(1046%)hue-rotate(95deg)brightness(103%)contrast(102%);">
                  <span><img src="images/stats/health_regen.svg" decoding="async" width="20" height="20"></span></span></span>
                <span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:#13f278;">healing</span> for a portion of the damage dealt.</div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
                <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                  <div style="position: relative;">
                    <div style="position: absolute; top: -10px; right: -2px">
                      <p><span style="font-size: 0.8em; color: #E3BDFA; white-space: nowrap;"><span><img src="images/stats/keystat_spirit_arrow_png.png" decoding="async" width="40" height="28"></spam></span>
                      </p>
                    </div>
                  </div>
                  <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background: rgb(42,41,43); background: radial-gradient(circle, rgba(42,41,43,1) 0%, rgba(59,49,69,1) 100%);; text-align: center; border: 3px solid #583D6F; box-shadow: 0 0 10px #3d2c4d; border-radius: 1px">
                    <div style="font-weight: bold;">
                      <p><span style="position: relative;">
                          <span><img src="images/stats/damage_magic_color.svg" decoding="async" width="15" height="15"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">32</span><span style="font-size: calc(1em - 2px); color: #B2B2B2"></span>
                        </span>
                      </p>
                    </div>
                    <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Damage Per Second</div>
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                  <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background-color: #2A2A2A; text-align: center; border: 3px solid #2A2A2A; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px">
                    <div style="font-weight: bold;">
                      <p><span class="AbilityStatsIconGrey">
                          <span><img src="images/stats/duration.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">4</span><span style="font-family:'Retail','Open Sans'; font-size: calc(1em - 2px); color: #B2B2B2">s</span>
                        </span>
                      </p>
                    </div>
                    <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Duration</div>
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                  <div style="font-family:'Retail','Open Sans'; font-weight: bold; padding-bottom: 2px; font-size: 0.8rem; color: #9C9C9C; font-variant: small-caps;">On Hit:
                  </div>
                  <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background-color: #2A2A2A; text-align: center; border: 3px solid #2A2A2A; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px">
                    <div style="font-weight: bold;">
                      <p><span style="position: relative; bottom: 2px; filter: brightness(0)saturate(100%)invert(66%)sepia(32%)saturate(1046%)hue-rotate(95deg)brightness(103%)contrast(102%);">
                          <span><img src="images/stats/heal.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">60</span><span style="font-size: calc(1em - 2px); color: #B2B2B2">%</span>
                        </span></p>
                    </div>
                    <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Lifesteal</div>
                  </div>
                </div>
              </div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
                <div style="display:flex; flex-direction:row; flex-grow: 1; flex-basis: 0; justify-content: left; background-color: #2A2A2A; font-size: 0.85em; margin: 3px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px; white-space: nowrap">
                  <p><span style="white-space: nowrap">
                      <span style="position: relative; bottom: 2px; filter: brightness(0)saturate(100%)invert(66%)sepia(32%)saturate(1046%)hue-rotate(95deg)brightness(103%)contrast(102%);">
                        <span><img src="images/stats/heal.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                      <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">30</span><span style="font-family:'Retail','Open Sans'; font-size: 10px; color: #9C9C9C">%</span>
                    </span>&nbsp;<span style="font-family:'Retail','Open Sans'; font-size: 0.75rem; white-space: nowrap">Lifesteal vs Non-Heroes</span></span>
                  </p>
                </div>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
              <div style="padding: 0 10px 0 10px"></div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
              </div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
              </div>
            </div>
            <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
              <div style="padding: 0 10px 0 10px"></div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
              </div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
              </div>
            </div>
          </div>
          <div style="display:flex; flex-direction:row; flex-wrap: wrap; margin-bottom: 5px; justify-content: center; width: calc(97% - 16px); min-width: 280px;">
            <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
              <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>1</b></span></div>
              <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans';">-19</span><span style="font-family:'Retail','Open Sans'; font-size: 12px;">s</span> Cooldown</div>
              <div></div>
            </div>
            <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
              <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>2</b></span></div>
              <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans';">+2</span><span style="font-family:'Retail','Open Sans'; font-size: 12px;">s</span> Duration</div>
              <div></div>
            </div>
            <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
              <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>5</b></span></div>
              <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.875rem);"><span style="font-family:'Retail','Open Sans';">+38</span><span style="font-size: 12px;"></span> Damage Per Second</div>
           <div>
         </div>
        </div>
        </div>
       </div>`
        list.innerHTML = out;
        list2.innerHTML = out2;
        

      }
      catch(error){
        console.error(error);
      }

    }

    async function Ability2Change() {

      try {


        const response = await fetch("heroes.json");
        const hero = await response.json();
        var Id = document.body.id;


        let list = document.querySelector("#video-output");
        let list2 = document.querySelector("#AbilityStats-output");

        let out = `<video class="AbilityVideo" autoplay="" preload="auto" loop="" playsinline=""><source type="video/webm" src="${hero[Id].videos.abilityvid2}"></video>`
        let out2 = `<div data-aos="fade-up" data-aos-duration="2000"  data-aos-anchor-placement="bottom" id="ShoulderCharge" class="AbilityContainer">
        <div style="width: 100%">
          <div class="AbilityHeaderContainer">
            <div class="AbilityHeaderTop">
              <div style="font-size: 1.3rem;">
                <p><span style="filter: brightness(0) saturate(100%) invert(98%) sepia(19%) saturate(1458%) hue-rotate(301deg) brightness(102%) contrast(109%); padding: 0 15px 0 6px;"><img src="images/abilities/abrams/bull_charge_psd.png" decoding="async" width="45" height="45"></span><span style="font-family:'Retail'; font-weight: bold;">Shoulder Charge</span>
                </p>
              </div>
              <div class="AbilityHeaderFlex">
                <p><br>
                </p>
                <p><br>
                </p>
                <div class="AbilityStatsMainContainer">
                  <span class="AbilityStatsIconGrey"><span title="Radius"><img alt="Radius" src="images/stats/duration.svg" decoding="async" width="20" height="20"></span></span>
                  <span style="font-family:'Retail'; font-weight: bold; color: inherit; padding-left: 3px;">1.4</span><span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2">s</span>
                </div>
                <div style="position: relative;">
                  <div style="position: absolute; top: -13px; right: 12px">
                    <p><span style="font-size: 0.8em; color: #E3BDFA; white-space: nowrap;"><span></span></span></span>
                    </p>
                  </div>
                </div>
                <p><br>
                </p>
                <div>
                  <span></span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; align-items: end; justify-content: flex-end;">
              <div
                style="display:flex; flex-direction:row; justify-content: flex-end; margin-bottom: 5px; margin-right: 20px;">
                <p><br>
                </p>
                <p><br>
                </p>
              </div>
              <div style="background-color: #2C2C2C; padding: 10px 6px 10px 6px; margin-right: 20px; white-space: nowrap;">
                <span class="AbilityStatsIconGrey">
                <span title="Cooldown">
                <img alt="Cooldown" src="images/stats/cooldown.svg" decoding="async" width="20" height="20">
              </span>
              </span>
              <span style="font-family:'Retail'; font-weight:bold; color: inherit; padding-left: 7px;">37</span>
              <span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2">s</span>
            </span>
              </div>
            </div>
          </div>
        </div>
      <div style="margin: 5px 10px 0px 10px; padding: 3px 0 5px 0; width: calc(100% - 18px); box-sizing: unset;">
          <div style="display:flex; flex-direction:column; align-items: center; width: 100%">
            <div style="padding: 0 10px 0 10px">Charge forward, 
              <span style="text-wrap:nowrap; font-weight:bold; color:#bc8ee8;"><span style="position: relative;">
              <span><img src="images/stats/condition_knockdown.svg" decoding="async" width="20" height="20"></span></span></span><span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:white;">pulling</span></span> enemies you hit. Pushing a hero into a wall applies<span style="text-wrap:nowrap; font-weight:bold; color:white;"><span style="position: relative; bottom: 2px;">
                <span><img src="images/stats/condition_stun.svg" decoding="async" width="20" height="20"></span></span></span>
              <span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:white;">stun</span>.<div>
              <span style="font-style: italic;color:#C0C0C0">If you collide with a hero you move faster during your charge.</span></div></div>
              
            <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
              <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                <div style="position: relative;">
                  <div style="position: absolute; top: 5px; right: -1px">
                    <p><span style="font-size: 0.8em; color: #E3BDFA; white-space: nowrap;"><span><img src="images/stats/keystat_spirit_arrow_png.png" decoding="async" width="40" height="28"></spam></span>
                    </p>
                  </div>
                </div>
                <div style="font-family:'Retail','Open Sans'; font-weight: bold; padding-bottom: 2px; font-size: 0.8rem; color: #9C9C9C; font-variant: small-caps;">On Hero Collide:
                </div>
                <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background: rgb(42,41,43); background: radial-gradient(circle, rgba(42,41,43,1) 0%, rgba(59,49,69,1) 100%);; text-align: center; border: 3px solid #583D6F; box-shadow: 0 0 10px #3d2c4d; border-radius: 1px">
                  <div style="font-weight: bold;">
                    <p><span style="position: relative;">
                        <span><img src="images/stats/damage_magic_color.svg" decoding="async" width="15" height="15"></span></span></span><span style="color: inherit;">
                        <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">37</span><span style="font-size: calc(1em - 2px); color: #B2B2B2"></span>
                      </span>
                    </p>
                  </div>
                  <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Damage Per Second</div>
                </div>
              </div>
          </div>
          <div style="display:flex; ">
            <div style="display:flex;">
              <p>
              </p>
            </div>
          </div>
        </div>
          <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
            <div style="padding: 0 10px 0 10px"></div>
            <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
            </div>
            <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
            <div style="padding: 0 10px 0 10px"></div>
            <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
            </div>
            <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
            </div>
          </div>
        </div>
        <div style="display:flex; flex-direction:row; flex-wrap: wrap; margin-bottom: 5px; justify-content: center; width: calc(97% - 16px); min-width: 280px;">
          <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
            <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
              <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>1</b></span></div>
            <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans'; ">On Hero Collide:+25% Weapon Damage for 8</span><span style="font-family:'Retail','Open Sans'; font-style: bold; font-size: 12px;">s</span></div>
            <div></div>
          </div>
          <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
            <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
              <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>2</b></span></div>
            <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans';">On Wall Hit: +0.45s Stun Duration</span><span style="font-family:'Retail','Open Sans'; font-size: 12px;"></span> </div>
            <div></div>
          </div>
          <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
            <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
              <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>5</b></span></div>
            <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.875rem);"><span style="font-family:'Retail','Open Sans';">-22</span><span style="font-size: 12px;">s</span> Cooldown</div>
         <div>
       </div>
      </div>
      </div>
     </div>`
        list.innerHTML = out;
        list2.innerHTML = out2;
        

      }
      catch(error){
        console.error(error);
      }

    }

    async function Ability3Change() {

      try {


        const response = await fetch("heroes.json");
        const hero = await response.json();
        var Id = document.body.id;

        let list = document.querySelector("#video-output");
        let list2 = document.querySelector("#AbilityStats-output");

        let out = `<video class="AbilityVideo" autoplay="" preload="auto" loop="" playsinline=""><source type="video/webm" src="${hero[Id].videos.abilityvid3}"></video>`
        let out2 = `<div data-aos="fade-up" data-aos-duration="2000"  data-aos-anchor-placement="bottom" id="InfernalResilience" class="AbilityContainer">
            <div style="width: 100%">
              <div class="AbilityHeaderContainer">
                <div class="AbilityHeaderTop">
                  <div style="font-size: 1.3rem;">
                    <p><span style="filter: brightness(0) saturate(100%) invert(98%) sepia(19%) saturate(1458%) hue-rotate(301deg) brightness(102%) contrast(109%); padding: 0 15px 0 6px;"><img src="images/abilities/abrams/bull_beef_psd.png" decoding="async" width="45" height="45"></span><span style="font-family:'Retail'; font-weight: bold;">Infernal Resilience</span>
                    </p>
                  </div>
                  <div class="AbilityHeaderFlex">
                    <p><br>
                    </p>
                    <p><br>
                    </p>
                    <div class="">
                      <span></span></span>
                      <span></span>
                    </div>
                    <div style="position: relative;">
                      <div style="position: absolute; top: -13px; right: 12px">
                        <p><span style="font-size: 0.8em; color: #E3BDFA; white-space: nowrap;"><span></span></span></span>
                        </p>
                      </div>
                    </div>
                    <p><br>
                    </p>
                    <div>
                      <span></span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; align-items: end; justify-content: flex-end;">
                  <div
                    style="display:flex; flex-direction:row; justify-content: flex-end; margin-bottom: 5px; margin-right: 20px;">
                    <p><br>
                    </p>
                    <p><br>
                    </p>
                  </div>
                  <div style=" padding: 10px 6px 10px 6px; margin-right: 20px; white-space: nowrap;">
                    <span class="">
                    <span title="">
                  </span>
                  </span>
                  <span style="font-family:'Retail'; font-weight:bold; color: inherit; padding-left: 7px;"></span>
                  <span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2"></span>
                </span>
                  </div>
                </div>
              </div>
            </div>
          <div style="margin: 5px 10px 0px 10px; padding: 3px 0 5px 0; width: calc(100% - 18px); box-sizing: unset;">
              <div style="display:flex; flex-direction:column; align-items: center; width: 100%">
                <div style="padding: 0 10px 0 10px">Gain bonus defensive attributes. Taking damage grants temporary 
                  <span style="text-wrap:nowrap; font-weight:bold; color:#bc8ee8;"><span style="position: relative;">
                  <span><span style="position: relative; bottom: 2px; filter: brightness(0)saturate(100%)invert(66%)sepia(32%)saturate(1046%)hue-rotate(95deg)brightness(103%)contrast(102%);"><img src="images/stats/health_regen.svg" decoding="async" width="20" height="20"></span></span></span><span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:#13f278;">regeneration</span></span> for a portion of the damage taken.<span style="text-wrap:nowrap; font-weight:bold; color:white;"></span></span></span>
                  <span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:white;"></span><div>
                  <span style="font-style: italic;color:#C0C0C0"></span></div></div>
                  <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
                    <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                      <div style="font-family:'Retail','Open Sans'; font-weight: bold; padding-bottom: 2px; font-size: 0.8rem; color: #9C9C9C; font-variant: small-caps;">Passive:
                      </div>
                      <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background-color: #2A2A2A; text-align: center; border: 3px solid #2A2A2A; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px">
                        <div style="font-weight: bold;">
                          <p><span style="position: relative; bottom: 2px; filter: brightness(0)saturate(100%)invert(66%)sepia(32%)saturate(1046%)hue-rotate(95deg)brightness(103%)contrast(102%);">
                              <span><img src="images/stats/heal.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                              <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">13</span><span style="font-size: calc(1em - 2px); color: #B2B2B2">%</span>
                            </span></p>
                        </div>
                        <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Damage Regenerated</div>
                      </div>
                    </div>
                    <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                      <div style="font-family:'Retail','Open Sans'; font-weight: bold; padding-bottom: 2px; font-size: 0.8rem; color: #9C9C9C; font-variant: small-caps;">Passive:
                      </div>
                      <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background-color: #2A2A2A; text-align: center; border: 3px solid #2A2A2A; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px">
                        <div style="font-weight: bold;">
                          <p><span class="AbilityStatsIconGrey" style="position: relative; bottom: 2px; ">
                              <span><img src="images/stats/duration.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                              <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">20</span><span style="font-size: calc(1em - 2px); color: #B2B2B2">s</span>
                            </span></p>
                        </div>
                        <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Regeneration Time</div>
                      </div>
                    </div>
                  </div>
                  <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
                    <div style="display:flex; flex-direction:row; flex-grow: 1; flex-basis: 0; justify-content: left; background-color: #2A2A2A; font-size: 0.85em; margin: 3px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px; white-space: nowrap">
                      <p><span style="white-space: nowrap">
                          <span style="position: relative; bottom: 2px; filter: brightness(0)saturate(100%)invert(66%)sepia(32%)saturate(1046%)hue-rotate(95deg)brightness(103%)contrast(102%);">
                            <span><img src="images/stats/health.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">1</span><span style="font-family:'Retail','Open Sans'; font-size: 10px; color: #9C9C9C"></span>
                        </span>&nbsp;<span style="font-family:'Retail','Open Sans'; font-size: 0.75rem; white-space: nowrap">Health Regen</span></span>
                      </p>
                    </div>
              </div>
              <div style="display:flex; ">
                <div style="display:flex;">
                  <p>
                  </p>
                </div>
              </div>
            </div>
              <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
                <div style="padding: 0 10px 0 10px"></div>
                <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
                </div>
                <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
                </div>
              </div>
              <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
                <div style="padding: 0 10px 0 10px"></div>
                <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
                </div>
                <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
                </div>
              </div>
            </div>
            <div style="display:flex; flex-direction:row; flex-wrap: wrap; margin-bottom: 5px; justify-content: center; width: calc(97% - 16px); min-width: 280px;">
              <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
                <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                  <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>1</b></span></div>
                <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans'; ">+1.5 Health Regen</span><span style="font-family:'Retail','Open Sans'; font-style: bold; font-size: 12px;"></span></div>
                <div></div>
              </div>
              <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
                <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                  <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>2</b></span></div>
                <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans';">+150 Max Health</span><span style="font-family:'Retail','Open Sans'; font-size: 12px;"></span> </div>
                <div></div>
              </div>
              <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
                <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                  <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>5</b></span></div>
                <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.875rem);"><span style="font-family:'Retail','Open Sans';">+7<span style="font-size: 12px;">%</span> Damage Regenerated</span></div>
             <div>
           </div>
          </div>
          </div>
         </div>`
        list.innerHTML = out;
        list2.innerHTML = out2;
        

      }
      catch(error){
        console.error(error);
      }

    }

    async function Ability4Change() {

      try {


        const response = await fetch("heroes.json");
        const hero = await response.json();
        var Id = document.body.id;


        let list = document.querySelector("#video-output");
        let list2 = document.querySelector("#AbilityStats-output");

        let out = `<video class="AbilityVideo" autoplay="" preload="auto" loop="" playsinline=""><source type="video/webm" src="${hero[Id].videos.abilityvid4}"></video>`
        let out2 = `<div data-aos="fade-up" data-aos-duration="2000"  data-aos-anchor-placement="bottom" id="SeismicImpact" class="AbilityContainer">
          <div style="width: 100%">
            <div class="AbilityHeaderContainer">
              <div class="AbilityHeaderTop">
                <div style="font-size: 1.3rem;">
                  <p><span style="filter: brightness(0) saturate(100%) invert(98%) sepia(19%) saturate(1458%) hue-rotate(301deg) brightness(102%) contrast(109%); padding: 0 15px 0 6px;"><img src="images/abilities/abrams/bull_jump_psd.png" decoding="async" width="45" height="45"></span><span style="font-family:'Retail'; font-weight: bold;">Seismic Impact</span>
                  </p>
                </div>
                <div class="AbilityHeaderFlex">
                  <p><br>
                  </p>
                  <p><br>
                  </p>
                  <div class="">
                  </div>
                  <p><br>
                  </p>
                  <div class="">
                  </div>
                </div>
              </div>
              <div style="display:flex; flex-direction:column; align-items: end; justify-content: flex-end;">
                <div
                  style="display:flex; flex-direction:row; justify-content: flex-end; margin-bottom: 5px; margin-right: 20px;">
                  <p><br>
                  </p>
                  <p><br>
                  </p>
                </div>
                <div style="background-color: #2C2C2C; padding: 10px 6px 10px 6px; margin-right: 20px; white-space: nowrap;">
                  <span class="AbilityStatsIconGrey">
                  <span title="Cooldown">
                  <img alt="Cooldown" src="images/stats/cooldown.svg" decoding="async" width="20" height="20">
                </span>
                </span>
                <span style="font-family:'Retail'; font-weight:bold; color: inherit; padding-left: 7px;">185</span>
                <span style="font-family:'Retail'; font-weight: bold; font-size: calc(1em - 2px); color: #B2B2B2">s</span>
              </span>
                </div>
              </div>
            </div>
          </div>
        <div style="margin: 5px 10px 0px 10px; padding: 3px 0 5px 0; width: calc(100% - 18px); box-sizing: unset;">
            <div style="display:flex; flex-direction:column; align-items: center; width: 100%">
              <div style="padding: 0 10px 0 10px">Leap high into the air before crashing into the ground, dealing
                <span style="text-wrap:nowrap; font-weight:bold; color:#bc8ee8;"><span style="position: relative;">
                <span><img src="images/stats/damage_magic_color.svg" decoding="async" width="12" height="12"></span></span></span><span style="color: inherit;"></span><span style="text-wrap:nowrap; font-weight:bold; color:#bc8ee8;">spirit Damage</span></span> and applying <span style="text-wrap:nowrap; font-weight:bold; color:white;"><span style="position: relative; bottom: 2px;">
                  <span><img src="images/stats/condition_stun.svg" decoding="async" width="20" height="20"></span></span></span>
                <span style="color: inherit;"> </span> <span style="text-wrap:nowrap; font-weight:bold; color:white;">stun</span>.</div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
                <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                  <div style="position: relative;">
                    <div style="position: absolute; top: -10px; right: -2px">
                      <p><span style="font-size: 0.8em; color: #E3BDFA; white-space: nowrap;"><span><img src="images/stats/keystat_spirit_arrow_png.png" decoding="async" width="40" height="28"></spam></span>
                      </p>
                    </div>
                  </div>
                  <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background: rgb(42,41,43); background: radial-gradient(circle, rgba(42,41,43,1) 0%, rgba(59,49,69,1) 100%);; text-align: center; border: 3px solid #583D6F; box-shadow: 0 0 10px #3d2c4d; border-radius: 1px">
                    <div style="font-weight: bold;">
                      <p><span style="position: relative;">
                          <span><img src="images/stats/damage_magic_color.svg" decoding="async" width="15" height="15"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">55</span><span style="font-size: calc(1em - 2px); color: #B2B2B2"></span>
                        </span>
                      </p>
                    </div>
                    <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Damage Per Second</div>
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                  <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background-color: #2A2A2A; text-align: center; border: 3px solid #2A2A2A; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px">
                    <div style="font-weight: bold;">
                      <p><span class="AbilityStatsIconGrey">
                          <span><img src="images/stats/range.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">10.5</span><span style="font-family:'Retail','Open Sans'; font-size: calc(1em - 2px); color: #B2B2B2">m</span>
                        </span>
                      </p>
                    </div>
                    <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Duration</div>
                  </div>
                </div>
                <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; max-height: 100%; padding: 10px 0px 10px 0px; margin: 3px; overflow: hidden;">
                  <div style="font-family:'Retail','Open Sans'; font-weight: bold; padding-bottom: 2px; font-size: 0.8rem; color: #9C9C9C; font-variant: small-caps;">On Hit:
                  </div>
                  <div style="display:flex; flex-direction:column; flex-grow: 1; justify-content: space-between; background-color: #2A2A2A; text-align: center; border: 3px solid #2A2A2A; box-shadow: 0 0 10px #2A2A2A; border-radius: 1px">
                    <div style="font-weight: bold;">
                      <p><span class="AbilityStatsIconGrey" style="position: relative; bottom: 2px; ">
                          <span><img src="images/stats/duration.svg" decoding="async" width="18" height="18"></span></span></span><span style="color: inherit;">
                          <span style="font-family:'Retail','Open Sans'; font-weight:bold; color: inherit;">1.5</span><span style="font-size: calc(1em - 2px); color: #B2B2B2">s</span>
                        </span></p>
                    </div>
                    <div style="font-family:'Retail','Open Sans'; font-size: 0.8rem; padding-bottom: 3px">Stun Duration</div>
                  </div>
                </div>
              </div>

            </div>
            <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
              <div style="padding: 0 10px 0 10px"></div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
              </div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
              </div>
            </div>
            <div style="display:flex; flex-direction:column; align-items: center; width: 100%; padding-top: 8px">
              <div style="padding: 0 10px 0 10px"></div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; width: calc(97% - 5px); min-width: 280px;">
              </div>
              <div style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content: center; align-items: center; background-color: #2A2A2A; width: calc(97% - 19px); min-width: 267px; padding: 0 4px 0 4px; column-gap: 15px">
              </div>
            </div>
          </div>
          <div style="display:flex; flex-direction:row; flex-wrap: wrap; margin-bottom: 5px; justify-content: center; width: calc(97% - 16px); min-width: 280px;">
            <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
              <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>1</b></span></div>
              <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans';">-35</span><span style="font-family:'Retail','Open Sans'; font-size: 12px;">s</span> Cooldown</div>
              <div></div>
            </div>
            <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
              <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>2</b></span></div>
              <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.95rem);"><span style="font-family:'Retail','Open Sans';">On Hero Hit: +100 Max HP and +15<span style="font-family:'Retail','Open Sans'; font-size: 12px;">%</span> Fire Rate</span></div>
              <div></div>
            </div>
            <div style="display:flex; flex-direction:column; flex-grow: 1; flex-basis: 0; justify-content: flex-start; max-height: 140px; background-color: #555555; padding: 0 0px 20px 0px; margin: 6px; text-align: center; box-shadow: 0 0 10px #2A2A2A; border-radius: 5px">
              <div style="padding: 2px 0 0 2px; font-family:Retail Demo bold; font-size: clamp(0.70em, 2vw, 1em); background-color: #121212; border-radius: 5px 5px 0 0;">
                <span style="position: relative; bottom: 2px; filter: brightness(0) saturate(100%) invert(83%) sepia(26%) saturate(1312%) hue-rotate(197deg) brightness(107%) contrast(101%);"><span><img src="images/stats/ap_icon.svg" decoding="async" width="15" height="15"></span></span></span> <span style="color:#bc8ee8;"><b>5</b></span></div>
              <div style="font-family:'Retail','Open Sans'; padding: 10px 4px 4px 4px; font-size: clamp(0.70em, 2vw, 0.875rem);"><span style="font-family:'Retail','Open Sans';">On cast, become </span><span style="text-wrap:nowrap; font-weight:bold; color:white;">Unstoppable</span>.</div>
           <div>
         </div>
        </div>`
        list.innerHTML = out;
        list2.innerHTML = out2;
        

      }
      catch(error){
        console.error(error);
      }

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
                <div onmouseleave="PlayLess();" onmouseover="playRandomArpAudio(); playRandomRosterAudio(); PlayMore();" style="pointer-events:auto;" id="rosterselect" class="HeroCard2 CardBG">
          <span><span><a href="${hero.name}.html" title="${hero.name}">
            <img src="${hero.images.icon_hero_card}" decoding="async" width="120" height="200"></a></span></span>
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

      if (weaponbuttonpressed == 1){
      }
      else {

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

      const pageaudioArray = ["audio/ui_shop_panel_page_01.mp3", "audio/ui_shop_panel_page_02.mp3", "audio/ui_shop_panel_page_03.mp3", "audio/ui_shop_panel_page_04.mp3", "audio/ui_shop_panel_page_05.mp3", "audio/ui_shop_panel_page_06.mp3"];

      const audioIndex = Math.floor(Math.random() * pageaudioArray.length);

      var click = new Audio("audio/ui_shop_panel_weapon.mp3");
      var click2 = new Audio(pageaudioArray[audioIndex]);
      click.volume = 0.5;
      click2.volume = 0.2;
      click2.play();
      click.play();
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
                          <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="462" style="cursor: default;">
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
                           <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="445" style="cursor: default;">
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
                            <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="481" style="cursor: default;">
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
                          <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="457" style="cursor: default;">
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
                            <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="446" style="cursor: default;">
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
                            <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="526" style="cursor: default;">
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
                            <div onmouseover="playRandomWeaponAudio();" class="mod-box tier-1" id="651" style="cursor: default;">
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

        const pageaudioArray = ["audio/ui_shop_panel_page_01.mp3", "audio/ui_shop_panel_page_02.mp3", "audio/ui_shop_panel_page_03.mp3", "audio/ui_shop_panel_page_04.mp3", "audio/ui_shop_panel_page_05.mp3", "audio/ui_shop_panel_page_06.mp3"];

        const audioIndex = Math.floor(Math.random() * pageaudioArray.length);
  
        var click = new Audio("audio/ui_shop_panel_vitality.mp3");
        var click2 = new Audio(pageaudioArray[audioIndex]);
        click.volume = 0.5;
        click2.volume = 0.2;
        click2.play();
        click.play();
  
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

          const pageaudioArray = ["audio/ui_shop_panel_page_01.mp3", "audio/ui_shop_panel_page_02.mp3", "audio/ui_shop_panel_page_03.mp3", "audio/ui_shop_panel_page_04.mp3", "audio/ui_shop_panel_page_05.mp3", "audio/ui_shop_panel_page_06.mp3"];

          const audioIndex = Math.floor(Math.random() * pageaudioArray.length);
    
          var click = new Audio("audio/ui_shop_panel_magic.mp3");
          var click2 = new Audio(pageaudioArray[audioIndex]);
          click.volume = 0.5;
          click2.volume = 0.2;
          click2.play();
          click.play();
    
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
    
