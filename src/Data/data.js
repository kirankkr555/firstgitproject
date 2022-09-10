

export const States = [
    {
        id: 1,
        title: 'Telangana',
        Image: require('../../assets/images/Telangana.png'),
        label:'TN'
    },
    {
        id: 2,
        title: 'Andhra',
        Image: require('../../assets/images/Andhra.png'),
        label:'AP'
    },
    {
        id: 3,
        title: 'Karnataka',
        Image: require('../../assets/images/karnataka.png'),
    },
    {
        id: 4,
        title: 'TamilNadu',
        Image: require('../../assets/images/chennai.png'),
    }
];

export const Images = [
    {
        id: 1,
        Image: require('../../assets/images/Telangana.png'),
    
    },
    {
        id: 4,
        Image: require('../../assets/images/Andhra.png'),
    },
    {
        id: 3,
        Image: require('../../assets/images/karnataka.png'),
    },
    {
        id: 2,
        Image: require('../../assets/images/chennai.png'),
    }
];

export const collectionDetails = [

    {
        id: 1,
        Branch: "AMALAPURAM",
        ChequeCollected: 948120,
        CashCollected: 877372.5,
        DDCollected: 0,
        TotalAmount: 1825492.5
    },
];

export const Top10Receipts = [

    {
        id: 1,
        Branch: "VELLORE",
        AgentName: "R SELVAKUMARAN",
        Username: "DOVL831",
        TotalReceipts: 434,
        TotalCollection: 1825492.5
    },
    {
        id: 2,
        Branch: "NIZAMABAD",
        AgentName: "M SANTHOSH KUMAR",
        Username: "DONB856",
        TotalReceipts: 344,
        TotalCollection: 1825492.5
    },
    {
        id: 3,
        Branch: "KOTHAGUDEM",
        AgentName: "N.SRINIVASA RAO",
        Username: "ROX910",
        TotalReceipts: 216,
        TotalCollection: 1825492.5
    },
    {
        id: 4,
        Branch: "CHIKKADAPALLI",
        AgentName: "M.SOWRI RAJU",
        Username: "ROC912",
        TotalReceipts: 198,
        TotalCollection: 1825492.5
    },
    {
        id: 5,
        Branch: "KARIMNAGAR",
        AgentName: "K.RAJ KUMAR",
        Username: "ROF952",
        TotalReceipts: 188,
        TotalCollection: 1825492.5
    },
    {
        id: 6,
        Branch: "BHIMAVARAM",
        AgentName: "I.V.BALAJI",
        Username: "ROBV912",
        TotalReceipts: 186,
        TotalCollection: 1825492.5
    },
    {
        id: 7,
        Branch: "TIRUPATHI",
        AgentName: "CH.VAMSI KRISHNA",
        Username: "ROJ924",
        TotalReceipts: 185,
        TotalCollection: 1825492.5
    },
    {
        id: 8,
        Branch: "NIZAMABAD",
        AgentName: "CH ANIL KUMAR",
        Username: "RONB940",
        TotalReceipts: 184,
        TotalCollection: 1825492.5
    },
    {
        id: 9,
        Branch: "WARANGAL",
        AgentName: "N.Thirumalesh",
        Username: "ROW918",
        TotalReceipts: 183,
        TotalCollection: 1825492.5
    },
    {
        id: 10,
        Branch: "WARANGAL",
        AgentName: "Ch.Srinu",
        Username: "ROW915",
        TotalReceipts: 183,
        TotalCollection: 1825492.5
    }

];

export const StateWideTotalCollection = [
    {
        State: "TS CITY",
        TotalNoOfReceipts: 5418,
        Cash: 45298784,
        Cheque: 176360082.5,
        DD: 364960,
        TotalCollection: 222023826.5
    },
    {
        State: "TS MUFSIL",
        TotalNoOfReceipts: 8519,
        Cash: 93371757,
        Cheque: 115089730,
        DD: 0,
        TotalCollection: 208461487
    },
    {
        State: "TS CITY + TS MUFSIL = TS",
        TotalNoOfReceipts: 13937,
        Cash: 138670541,
        Cheque: 291449812.5,
        DD: 364960,
        TotalCollection: 430485313.5
    },
    {
        State: "ANDHRA PRADESH",
        TotalNoOfReceipts: 11851,
        Cash: 92665491.5,
        Cheque: 162132686.1,
        DD: 0,
        TotalCollection: 254798177.6
    },
    {
        State: "KARNATAKA",
        TotalNoOfReceipts: 3421,
        Cash: 20125829,
        Cheque: 94665877,
        DD: 0,
        TotalCollection: 114791706
    },
    {
        State: "TAMILNADU",
        TotalNoOfReceipts: 2511,
        Cash: 11515079,
        Cheque: 46025099,
        DD: 0,
        TotalCollection: 57540178
    },
];

export const OverallCollection = [
    {
        ReceiptsCount: 7053,
        TotalAmount: 259364802
    }
]

export const BranchReport = [
    
    {
     id: 1,
     StaffCode: "H 912",
     StafffName: "P.Kiran",
     ScheduleCases: 2,
     ScheduleAmount: 45806.80,
     CollectedCases: 2,
     CollectedAmount: 45875.00,
     CashDetails: 9000.00,
     ChequeDetails: 36875.00,
     DDDetails: 0.00 
    },
    {
        id: 2,
        StaffCode: "H 916",
        StafffName: "R.Raghu",
        ScheduleCases: 4,
        ScheduleAmount: 111770.40,
        CollectedCases: 2,
        CollectedAmount: 111827.00,
        CashDetails: 39500.00,
        ChequeDetails: 72327.00,
        DDDetails: 0.00 
    },
    {
        id: 3,
        StaffCode: "H 927",
        StafffName: "Ch.Rambabu",
        ScheduleCases: 1,
        ScheduleAmount: 150002.00,
        CollectedCases: 1,
        CollectedAmount: 150000.00,
        CashDetails: 150000.00,
        ChequeDetails: 0.00,
        DDDetails: 0.00 
    },
   
   ];

   export default BranchReport;

   export const RoChits = [
    
    {
     id: 1,
     ChitRefNo: "FT001D H 8",
     SubscriberName: "A R ASHOK KUMAR",
     ReceiptNo: 3111090,
     ReceiptTime: "14-04-2022 15:50:02",
     FromInst: 5,
     ToInst: 5,
     ModeOfPayment: "Cheque(No : 163164, Date: 14-04-2022, Amount:36875.00)",
     AmountCollected: 36875.00
    },
    
   
   ];

   export const CollectionReport = [
    
    {
     id: 1,
     CashCollected: 123654,
     ChequeCollected: 586974,
     DDCollected: 456987,
     TotalAmount: 1458796
    },
    
   
   ];

   export const TotalBranchDetails = [
    
    {
     id: 1,
     TotalReceipts: 123654,
     TotalAmount: 586974
    },
    
   
   ];

