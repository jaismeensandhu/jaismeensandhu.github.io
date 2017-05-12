


angular.module('myApp', ['ui.bootstrap']);
angular.module('myApp').controller('namesCtrl', function($scope, $modal, $log) {
    $scope.items = [
        {name:'CSI America Website',pid:'6',skill:'Web Development, PHP, Java Script, HTML5 ',image:'pic01',description:'Website for CSI America, have complete backend portal to post jobs & manage Applicants by HR Teams. Integrated with Facebook, LinkedIn, & Indeed.'},
        {name:'Mentor Tech Source Website',pid:'8',skill:'Web Development',image:'pic02',description:'Website for Mentor Tech Source Inc., connected with Google Analytics. Backend portal to manage Applicants & Jobs. Integrated with Facebook & Indeed.'},
        {name:'My Chic Shopper Shopping Portal',pid:'5',skill:'Web Development',image:'pic03',description:'Online Shopping portal build with Shopify CMS.'},
        {name:'iRok Designz',pid:'4',skill:'Web Development',image:'pic02',description:'Online Shopping portal build with Shopify CMS.'},
        {name:'Selenium Web Automation',pid:'3',skill:'IT Automation',image:'pic03',description:'Selenium Automation, to automate Web Browsers based tasks, such as Creating/Managing users on Web POS Systems, Removing 100s of Bad Links from Google Webmasters'},
        {name:'SME Agency Website',pid:'7',skill:'Web Development',image:'pic01',description:'A reponsive website build for SME Agency, an Executive Recruitment Firm.'},
        {name:'Service-Now end-to-end Automation',pid:'2',skill:'IT Automation',image:'pic01',description:'Automation performed on Service-Now to automate enterprise level tasks, such as Create or Manage Databases, Build VMs, Create or Manage AD Users, etc.'},
        {name:'National Conference Website',pid:'1',skill:'Web Development',image:'pic01',description:'Website for National Conference On Recent Advances of Electronics & Communication.'},
        {name:'Facebook and LinkedIn Integration',pid:'9',skill:'Integration',image:'pic01',description:'Integrated websites with Facebook and LinkedIn using respective APIs and apps'},
        {name:'Super Techie Chatbot',pid:'10',skill:'iOT and AI',image:'pic01',description:'Artificially Intelligent Chatbot "Super Techie" which Integrated with Facebook Page "IT Developers".'},
        {name:'MAPD Program Hybrid App',pid:'11',skill:'Hybrid & iOS Apps Development',image:'pic01',description:'A hybrid app to advertise MAPD program and to get feedback from students'},
        {name:'Real Me iOS App',pid:'12',skill:'Hybrid & iOS Apps Development',image:'pic01',description:'An iOS Social Media app with unique features.'}
    ];
    $scope.filterSkills = function(item) {
        $scope.test = item;
    }

    $scope.open = function (selectedItem) {
    
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        item: function () {
          return selectedItem;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
        }, function () {
        $log.info('Modal dismissed at: ' + new Date());
        });
  };

});

angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, item) {
$scope.items = item;
$scope.selected = {
 item: $scope.items
};

$scope.cancel = function () {
$modalInstance.dismiss('cancel');
};
});