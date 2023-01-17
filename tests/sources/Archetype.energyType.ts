import Archetype from '../../src/Archetypes';
import { EnergyType } from '../../src/Energy';

class ArchetypeChild extends Archetype {
  get energyType(): EnergyType {
    return 'mana';
  }
}

class ArchetypeChild2 extends Archetype {
  get energyType(): EnergyType {
    return 'stamina';
  }
}

const archetype = new ArchetypeChild('Kirito');
archetype.energyType;

const archetype2 = new ArchetypeChild2('Asuna');
archetype2.energyType;
