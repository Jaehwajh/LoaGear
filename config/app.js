const mongoose = require('mongoose');
const express = require('express');

const statType = ['Crit', 'Specialization', 'Swiftness', 'Endurance', 'Domination', 'Expertise'];
const accessoryType = ['Earring', 'Ring', 'Necklace'];
const rarityType = ['Legendary', 'Relic', 'Ancient'];
const battleEngravings = ['Adrenaline', 'All-Out Attack', 'Ambush Master', 'Awakening', 'Barricade', 'Broken Bone', 'Contender', 'Crisis Evasion',
'Crushing Fist', 'Cursed Doll', 'Disrespect', 'Divine Protection', 'Drops of Ether', 'Emergency Rescue', 'Enhanced Shield', 'Ether Predator',
'Expert', 'Explosive Expert', 'Fortitude', 'Grudge', 'Heavy Armor', 'Hit Master', 'Keen Blunt Weapon', 'Lightning Fury', 'MP Efficiency Increase',
'Magick Stream', 'Mass Increase', 'Master Brawler', 'Master of Escape', `Master's Tenacity`, 'Max MP Increase', 'Necromancy', 'Precise Dagger',
'Preemptive Strike', 'Propulsion', 'Raid Captain', 'Shield Piercing', 'Sight Focus', 'Spirit Absorption', 'Stabilized Status', 'Strong Will',
'Super Charge', 'Vital Point Hit'];
const classEngraving = ['Arthetinean Skill', 'Barrage Enhancement', `Berserker's Technique`, 'Blessed Aura', 'Combat Readiness', 'Communcation Overflow',
'Control', 'Death Strike', 'Deathblow', 'Demonic Impulse', 'Desperate Salvation', `Empress's Grace`, 'Energy Overflow', 'Enhanced Weapon',
'Esoteric Flurry', 'Esoteric Skill Enhancement', 'Evolutionary Legacy', 'Firepower Enhancement', 'First Intention', 'Full Bloom', 'Gravity Training',
'Hunger', 'Igniter', 'Judgment', 'Lone Knight', 'Loyal Companion', 'Lunar Voice', 'Master Summoner', 'Mayhem', 'Order of the Emperor', 'Peacemaker',
'Perfect Suppression', 'Pinnacle', 'Pistoleer', 'Predator', 'Punisher', 'Rage Hammer', 'Recurrence', 'Reflux', 'Remaining Energy', 'Robust Spirit',
'Shock Training', 'Surge', 'Time to Hunt', 'True Courage', 'Ultimate Skill: Taijutsu'];

exports.accessoryType = accessoryType;
exports.statType = statType;
exports.rarityType = rarityType;
exports.battleEngravings = battleEngravings;
exports.classEngraving = classEngraving;