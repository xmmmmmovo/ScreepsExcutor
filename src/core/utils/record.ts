/**
 * 用于grafana监控
 * @returns void
 */
export function exportStats(): void {
  // every 10 ticks run once
  if (Game.time % 10) return

  // Reset stats object
  Memory.stats = {
    gcl: {
      progress: Game.gcl.progress,
      progressTotal: Game.gcl.progressTotal,
      level: Game.gcl.level
    },
    rooms: {},
    cpu: {
      bucket: Game.cpu.bucket,
      limit: Game.cpu.limit,
      used: Game.cpu.getUsed()
    },
    time: Game.time
  }

  // Collect room stats
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName]
    const isMyRoom = room.controller ? room.controller.my : false
    if (isMyRoom) {
      Memory.stats.rooms[roomName] = {
        storageEnergy: room.storage ? room.storage.store.energy : 0,
        terminalEnergy: room.terminal ? room.terminal.store.energy : 0,
        energyAvailable: room.energyAvailable,
        energyCapacityAvailable: room.energyCapacityAvailable,
        controllerProgress: room.controller?.progress,
        controllerProgressTotal: room.controller?.progressTotal,
        controllerLevel: room.controller?.level
      }
    }
  }
}
