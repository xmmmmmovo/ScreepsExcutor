import { build } from './actions/build'
import { harvest } from './actions/harvest'

export const roleBuilder = {
  run: function (creep: Creep) {
    if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.working = false
      creep.say('🔄 harvest')
    }
    if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
      creep.memory.working = true
      creep.say('🚧 build')
    }

    if (creep.memory.working) {
      build(creep)
    } else {
      harvest(creep)
    }
  }
}