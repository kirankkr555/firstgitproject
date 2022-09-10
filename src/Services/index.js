


// test Url's

DashboardPage = {
    url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/states`,
}

BranchesPage = {
    url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/branchList/${Branch.stateCode}`,  //presentData
    url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/branchList/${Branch.stateCode}/${start}/${end}`, //withDates
}

BranchDetailsPage = {
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/roList/${Collection.BranchCode}`,  //presentData
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/roList/${Collection.BranchCode}/${start}/${end}`, //withDates
}

RoChitsPage = {
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/roDetailedList/${chitDetails.StaffDeatils.branchCode}/${chitDetails.StaffDeatils.staffCode}`,   //presentData
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/roDetailedList/${chitDetails.StaffDeatils.branchCode}/${chitDetails.StaffDeatils.staffCode}/${start}/${end}`, //withDates
}

top10 = {
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts`,  //presentData
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts/${start}/${end}`, //withDates
}

statewidecollection ={
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/cumList`, //presentDates
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts/${start}/${end}`, //withDates
}

overallCollection ={
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/totalCollection`,  //presentDates
    url:`https://dev1.margadarsi.com/FSUMROAPP/fsapp/totalCollection/${start}/${end}`, //withDates
}

version={
url: `https://dev1.margadarsi.com/FSUMROAPP/fsapp/version`
}










// live Url's

DashboardPage = {
    url: `https://rolive.margadarsi.com/FSUMROAPP/fsapp/states`,
}

BranchesPage = {
    url: `https://rolive.margadarsi.com/FSUMROAPP/fsapp/branchList/${Branch.stateCode}`,  //presentData
    url: `https://rolive.margadarsi.com/FSUMROAPP/fsapp/branchList/${Branch.stateCode}/${start}/${end}`, //withDates
}

BranchDetailsPage = {
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/roList/${Collection.BranchCode}`,  //presentData
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/roList/${Collection.BranchCode}/${start}/${end}`, //withDates
}

RoChitsPage = {
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/roDetailedList/${chitDetails.StaffDeatils.branchCode}/${chitDetails.StaffDeatils.staffCode}`,   //presentData
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/roDetailedList/${chitDetails.StaffDeatils.branchCode}/${chitDetails.StaffDeatils.staffCode}/${start}/${end}`, //withDates
}

top10 = {
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts`,  //presentData
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts/${start}/${end}`, //withDates
}

statewidecollection ={
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/cumList`, //presentDates
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/topTenReceipts/${start}/${end}`, //withDates
}

overallCollection ={
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/totalCollection`,  //presentDates
    url:`https://rolive.margadarsi.com/FSUMROAPP/fsapp/totalCollection/${start}/${end}`, //withDates
}

version={
    url: `https://rolive.margadarsi.com/FSUMROAPP/fsapp/version`
}