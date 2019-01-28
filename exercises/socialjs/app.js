var user = {
    name: "Jessie",
    experience: "Expert",
    local: true,
    connections: [
        { 
            name: "Danny", 
            //Key    Value
        
            experience: "Pro", 
            local: true,
            futureTrips: [
            {
                tripName: "Berlin",
                        budget: 2400,  
                 tripName:"Japan", 
                        budget: 3500,
                 tripName:"India",
                        budget: 4800,
            }
        ],
    tripSelector : function(futureTrips){
        for(var i =0; i<futureTrips.length; i++){
            return 
        }


    }
        }
    ],
// Can I add a method, that chooses a trip (to go on) out of the listed future trips property?
    
    
    futureTrips: ["Bali", "Disneyland", "Paris"]

}
 
console.log(user.connections[0].futureTrips[0]);

// console.log(user.connections[0].futureTrips[0]);
// console.log(user.connections[0])


// What is going on here? How can i get it to list off Danny's Future Trips
// console.log(user.connections(console.log(connections.futureTrips)));


// Loops and Array practice 

// function toggleSwitch(switches) {

//     for(var i =  0; i < switches.length; i++){
//         for(var j = 0; j < switches[i]; j++){
//             on = !on;
//         }
//     }

//     var on = false;
//     if(on){
//         return "The Light is on!"
//     } else{
//         return "The light is off"
//     }
// }

// console.log(toggleSwitch([2, 5, 435,]));
// console.log(toggleSwitch([9, 3, 4, 2]))
