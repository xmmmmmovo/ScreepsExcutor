import { sigmoid } from 'core/utils/math'

// cpu限制器
export const cpuLimit = (): number => _.ceil(Game.cpu.limit * sigmoid(Game.cpu.bucket / 10000))
