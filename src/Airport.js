'use strict'

function Airport(weather = new Weather) {
    this._hanger = []
}
Airport.prototype.planes = function () {
    return this._hanger
}
Airport.prototype.clearForLanding = function(plane){
    if(this.isStormy()){
        throw new Error('cannot land during storm')
    }
    this._hanger.push(plane)
}
Airport.prototype.clearForTakeOff = function(plane){
if(this.isStormy()){
    throw new Error('cannot takeoff during storm')
}
    this._hanger = []
} 
Airport.prototype.isStormy = function(){
    return false 
}