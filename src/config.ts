import { BodyMapping } from 'utils'
import { TDstType } from 'global'

export const SpawnName = 'Base'

export const BaseBody: BodyMapping = {
  work: 1,
  move: 1,
  carry: 1
}

export const sourceUpperBound = 3
export const havesterUpperBound = 6
export const upgraderUpperBound = 1
export const builderUpperBound = 4

if (Memory.init === undefined) {
  console.log('init memory')
  Memory.init = true
  Memory.uuid = 1
  Memory.dstCounter = {
    source: {}
  } as TDstType
}
