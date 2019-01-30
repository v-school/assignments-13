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
                        budget: 2400,}, 
                 {tripName:"Japan", 
                        budget: 3500,},
                 {tripName:"India",
                        budget: 4800,
            },
                        ],
    }   
                ],
    
    tripSelector : function(futureTrips){
        for(var i =0; i<futureTrips.length; i++){
            return 
        }


    },
    
    
// Can I add a method, that chooses a trip (to go on) out of the listed future trips property?

futureTrips: ["Bali", "Disneyland", "Paris"]
}

console.log(user.connections[0].futureTrips[0]);

// var human = {}

