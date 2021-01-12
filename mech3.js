// angular.module('CalculatorApp', []).controller('CalculatorController', function($scope) {
//             $scope.arrlist = [{ "userid": 1, "name": "ECE" }, { "userid": 2, "name": "EEE" }, { "userid": 3, "name": "EIE" }, { "userid": 4, "name": "BIOTECH" }, { "userid": 5, "name": "CIVIL" }, { "userid": 6, "name": "MEDICAL ELECTRONICS" }];
//             $scope.getdetails = function() {
//                 if ($scope.userselected.userid == "1") {
//                     $scope.ec = true;
//                     $scope.eee = false;
//                     $scope.eie = false;
//                     $scope.bio = false;
//                     $scope.civil = false;
//                     $scope.med = false;
//                     // $scope.iem = false;
//                     // $scope.chem = false;
//                     $scope.reset();
//                 } else if ($scope.userselected.userid == "2") {
//                     $scope.ec = false;
//                     $scope.eee = true;
//                     $scope.eie = false;
//                     $scope.bio = false;
//                     $scope.civil = false;
//                     $scope.med = false;
//                     // $scope.iem = false;
//                     // $scope.chem = false;

//                     $scope.reset();
//                 } else if ($scope.userselected.userid == "3") {
//                     $scope.ec = false;
//                     $scope.eee = false;
//                     $scope.eie = true;
//                     $scope.bio = false;
//                     $scope.civil = false;
//                     $scope.med = false;
//                     // $scope.iem = false;
//                     // $scope.chem = false;

//                     $scope.reset();
//                 } else if ($scope.userselected.userid == "4") {
//                     $scope.ec = false;
//                     $scope.eee = false;
//                     $scope.eie = false;
//                     $scope.bio = true;
//                     $scope.civil = false;
//                     $scope.med = false;
//                     // $scope.iem = false;
//                     // $scope.chem = false;

//                     $scope.reset();
//                 } else if ($scope.userselected.userid == "5") {
//                     $scope.ec = false;
//                     $scope.eee = false;
//                     $scope.eie = false;
//                     $scope.bio = false;
//                     $scope.civil = true;
//                     $scope.med = false;
//                     // $scope.iem = false;
//                     // $scope.chem = false;

//                     $scope.reset();
//                 } else if ($scope.userselected.userid == "6") {
//                     $scope.ec = false;
//                     $scope.eee = false;
//                     $scope.eie = false;
//                     $scope.bio = false;
//                     $scope.civil = false;
//                     $scope.med = true;
//                     // $scope.iem = false;
//                     // $scope.chem = false;

//                     $scope.reset();
//                     // } else if ($scope.userselected.userid == "7") {
//                     //     $scope.ec = false;
//                     //     $scope.eee = false;
//                     //     $scope.eie = false;
//                     //     $scope.bio = false;
//                     //     $scope.civil = false;
//                     //     $scope.med = false;
//                     //     $scope.iem = true;
//                     //     $scope.chem = false;

//                     //     $scope.reset();
//                     // } else if ($scope.userselected.userid == "8") {
//                     //     $scope.ec = false;
//                     //     $scope.eee = false;
//                     //     $scope.eie = false;
//                     //     $scope.bio = false;
//                     //     $scope.civil = false;
//                     //     $scope.med = false;
//                     //     // $scope.iem = false;
//                     //     // $scope.chem = true;

//                     //     $scope.reset();
//                     // }
//                 }
//                 $scope.calculateGrade = function(item) {
//                     if (item < 40)
//                         return 0;
//                     else if (item < 40 && item >= 30)
//                         return 4;
//                     else if (item < 50 && item >= 40)
//                         return 5;
//                     else if (item < 60 && item >= 50)
//                         return 6;
//                     else if (item < 70 && item >= 60)
//                         return 7;
//                     else if (item < 80 && item >= 70)
//                         return 8;
//                     else if (item < 90 && item >= 80)
//                         return 9;
//                     else if (item >= 90)
//                         return 10;
//                 };
//                 $scope.reset = function() {
//                     $scope.sub1 = "";
//                     $scope.sub2 = "";
//                     $scope.sub3 = "";
//                     $scope.sub4 = "";
//                     $scope.sub5 = "";
//                     $scope.sub6 = "";
//                     $scope.sub7 = "";
//                     $scope.lab1 = "";
//                     $scope.s5 = "";
//                     $scope.s7 = "";
//                     $scope.l1 = "";
//                     // $scope.sie5 = "";
//                     // $scope.sie6 = "";
//                     // $scope.sie7 = "";
//                     // $scope.sie8 = "";
//                     // $scope.sc5 = "";
//                     // $scope.sc6 = "";
//                     // $scope.sc7 = "";


//                 };
//                 $scope.result = function() {
//                     var gradeSub1 = $scope.calculateGrade($scope.sub1);
//                     var gradeSub2 = $scope.calculateGrade($scope.sub2);
//                     var gradeSub3 = $scope.calculateGrade($scope.sub3);
//                     var gradeSub4 = $scope.calculateGrade($scope.sub4);
//                     var gradeSub5 = $scope.calculateGrade($scope.sub5);
//                     var gradeSub6 = $scope.calculateGrade($scope.sub6);
//                     var gradeSub7 = $scope.calculateGrade($scope.sub7);
//                     var gradeLab1 = $scope.calculateGrade($scope.lab1);
//                     var gradeSee7 = $scope.calculateGrade($scope.see7);
//                     var gradeSee5 = $scope.calculateGrade($scope.see5);
//                     var gradeLee1 = $scope.calculateGrade($scope.lee1);
//                     // var gradesie5 = $scope.calculateGrade($scope.sie5);
//                     // var gradesie6 = $scope.calculateGrade($scope.sie6);
//                     // var gradesie7 = $scope.calculateGrade($scope.sie7);
//                     // var gradesie8 = $scope.calculateGrade($scope.sie8);
//                     // var gradesc5 = $scope.calculateGrade($scope.sc5);
//                     // var gradesc6 = $scope.calculateGrade($scope.sc6);
//                     // var gradesc7 = $scope.calculateGrade($scope.sc7);
//                     var sgpa = ((gradeSub1 * 4) + (gradeSub2 * 4) + (gradeSub3 * 4) + (gradeSub4 * 4) + (gradeSub5 * 4) + (gradeSub6 * 3) + (gradeSub7 * 1) + (gradeLab1 * 1) + (gradeSee7 * 4) + (gradeSee5 * 4) + (gradeLee1 * 1)) / 25;
//                     if (isNaN(sgpa)) { return "0"; } else
//                         sgpa = sgpa.toFixed(3);
//                     return sgpa;
//                 };

//                 // $scope.reset = function() {
//                 //     $scope.sub1 = "";
//                 //     $scope.sub2 = "";
//                 //     $scope.sub3 = "";
//                 //     $scope.sub4 = "";
//                 //     $scope.sub5 = "";
//                 //     $scope.sub6 = "";
//                 //     $scope.sub7 = "";
//                 //     $scope.lab1 = "";

//                 // };
//                 // $scope.result = function() {
//                 //     var gradeS1 = $scope.calculateGrade($scope.s1);
//                 //     var gradeS2 = $scope.calculateGrade($scope.s2);
//                 //     var gradeS3 = $scope.calculateGrade($scope.s3);
//                 //     var gradeS4 = $scope.calculateGrade($scope.s4);
//                 //     var gradeS5 = $scope.calculateGrade($scope.s5);
//                 //     var gradeS6 = $scope.calculateGrade($scope.s6);
//                 //     var gradeS7 = $scope.calculateGrade($scope.s7);
//                 //     var gradeL1 = $scope.calculateGrade($scope.l1);

//                 //     var sgpaec = ((gradeS1 * 4) + (gradeS2 * 4) + (gradeS3 * 4) + (gradeS4 * 4) + (gradeS5 * 4) + (gradeS6 * 3) + (gradeS7 * 1) + (gradeL1 * 1)) / 25;
//                 //     if (isNaN(sgpaec)) { return "0"; } else
//                 //         sgpaec = sgpaec.toFixed(3);
//                 //     return sgpaec;
//                 // };
//                 // $scope.cgpa3semec = function() {
//                 //     var cgpaec = (($scope.cg12 * 48) + ($scope.cg3 * 26)) / 74;
//                 //     if (isNaN(cgpaec)) { return "0"; } else
//                 //         cgpaec = cgpaec.toFixed(3);
//                 //     return cgpaec;
//                 // };
//             });
angular.module('CalculatorApp', []).controller('CalculatorController', function($scope) {
    $scope.arrlist = [{ "userid": 1, "name": "MECHANICAL" }];
    $scope.getdetails = function() {
        if ($scope.userselected.userid == "1") {
            $scope.mech = true;
            $scope.reset();
        }
    }
    $scope.calculateGrade = function(item) {
        if (item < 40)
            return 0;
        else if (item < 40 && item >= 30)
            return 4;
        else if (item < 50 && item >= 40)
            return 5;
        else if (item < 60 && item >= 50)
            return 6;
        else if (item < 70 && item >= 60)
            return 7;
        else if (item < 80 && item >= 70)
            return 8;
        else if (item < 90 && item >= 80)
            return 9;
        else if (item >= 90)
            return 10;
    };
    $scope.reset = function() {
        $scope.sub1 = "";
        $scope.sub2 = "";
        $scope.sub3 = "";
        $scope.sub4 = "";
        $scope.sub5 = "";
        $scope.sub6 = "";
        $scope.sub7 = "";
        $scope.sub8 = "";



    };
    $scope.result = function() {
        var gradeSub1 = $scope.calculateGrade($scope.sub1);
        var gradeSub2 = $scope.calculateGrade($scope.sub2);
        var gradeSub3 = $scope.calculateGrade($scope.sub3);
        var gradeSub4 = $scope.calculateGrade($scope.sub4);
        var gradeSub5 = $scope.calculateGrade($scope.sub5);
        var gradeSub6 = $scope.calculateGrade($scope.sub6);
        var gradeSub7 = $scope.calculateGrade($scope.sub7);
        var gradeSub8 = $scope.calculateGrade($scope.sub8);


        var sgpa = ((gradeSub1 * 4) + (gradeSub2 * 4) + (gradeSub3 * 4) + (gradeSub4 * 3) + (gradeSub5 * 3) + (gradeSub6 * 3) + (gradeSub7 * 3) + (gradeSub8 * 1)) / 25;
        if (isNaN(sgpa)) { return "0"; } else
            sgpa = sgpa.toFixed(3);
        return sgpa;
    };
    $scope.cgpa3sem = function() {
        var cgpa = (($scope.cg12 * 48) + ($scope.cg3 * 25)) / 73;
        if (isNaN(cgpa)) { return "0"; } else
            cgpa = cgpa.toFixed(2);
        return cgpa;
    };
    // $scope.reset = function() {
    //     $scope.sub1 = "";
    //     $scope.sub2 = "";
    //     $scope.sub3 = "";
    //     $scope.sub4 = "";
    //     $scope.sub5 = "";
    //     $scope.sub6 = "";
    //     $scope.sub7 = "";
    //     $scope.lab1 = "";

    // };
    // $scope.result = function() {
    //     var gradeS1 = $scope.calculateGrade($scope.s1);
    //     var gradeS2 = $scope.calculateGrade($scope.s2);
    //     var gradeS3 = $scope.calculateGrade($scope.s3);
    //     var gradeS4 = $scope.calculateGrade($scope.s4);
    //     var gradeS5 = $scope.calculateGrade($scope.s5);
    //     var gradeS6 = $scope.calculateGrade($scope.s6);
    //     var gradeS7 = $scope.calculateGrade($scope.s7);
    //     var gradeL1 = $scope.calculateGrade($scope.l1);

    //     var sgpaec = ((gradeS1 * 4) + (gradeS2 * 4) + (gradeS3 * 4) + (gradeS4 * 4) + (gradeS5 * 4) + (gradeS6 * 3) + (gradeS7 * 1) + (gradeL1 * 1)) / 25;
    //     if (isNaN(sgpaec)) { return "0"; } else
    //         sgpaec = sgpaec.toFixed(3);
    //     return sgpaec;
    // };
    // $scope.cgpa3semec = function() {
    //     var cgpaec = (($scope.cg12 * 48) + ($scope.cg3 * 26)) / 74;
    //     if (isNaN(cgpaec)) { return "0"; } else
    //         cgpaec = cgpaec.toFixed(3);
    //     return cgpaec;
    // };
});