// 'use strict'
// describe('Plane', function (){
//     var plane;
//     var airport; 
//     beforeEach(function(){
//         plane = new Plane();
//         airport = jasmine.createSpyObj('airport',['clearForLanding',['clearForTakeOff']])
//     })
//     it('can land at an aiport', function () {
//         plane.land(airport); 
//         expect(airport.clearForLanding).toHaveBeenCalledWith(plane)

//     }) 
//     it ('can takeoff from an aiport', function(){
//         plane.land(airport)
//         plane.takeOff()
//         expect(airport.clearForTakeOff).toHaveBeenCalled()
//     })
// })

'use strict'

describe('Weather', function(){
    var weather; 
    beforeEach(function(){
        weather = new Weather (); 
    })
    it('gives stormy sometimes', function(){
        spyOn(Math,'random').and.returnValue(1)
        expect(weather.isStormy()).toBeFalsy(); 

    })
})