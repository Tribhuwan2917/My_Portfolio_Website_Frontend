const currentDate=new Date()
const startDate=new Date()
startDate.setDate(19)
startDate.setFullYear(2022)
startDate.setMonth(9)
export const MyExperience={
    expNoOfYears:Math.floor((currentDate-startDate)/(1000*60*60*24*32*12)),
    expNoOfMonths:Math.floor((currentDate-startDate)/(1000*60*60*24*32))-Math.floor((currentDate-startDate)/(1000*60*60*24*32*12))*12

}
