'use strict';

angular.module('tedxUofT2015App')
  .controller('VideoCtrl', ["$scope", "$window", "$sce", function ($scope,$window,$sce) {
    
	//Scroll To Top
	$window.scrollTo(0,0);
	
	$scope.videos = [
		{title:"The power and danger of the kiss" , link:"http://www.youtube.com/embed/HsNP1L-hMqs", 
			id:"HsNP1L-hMqs", speaker:"Marcel Danesi",
			description:"Marcel Danesi is professor of anthropology and director of the Program in Semiotics at the University of \
			Toronto. He is a Fellow of the Royal Society of Canada in recognition of his work in the field of semiotics and communications.\
			He has published extensively on various topics, including the meanings of puzzles in human life. His books have been translated\
			into many languages including Farsi, Russian, Italian, French, Chinese, Japanese, Korean, and others. He is currently editor of\
			'Semiotica' the leading journal in the field. He also writes a blog for 'Psychology Today' on the relation between puzzles and \
			the brain. In addition to his academic interests, he founded a band with students at the University of Toronto seven years ago at\
			Victoria College, called the Semiotones, which is still playing for charity. All the proceeds from gigs and record sales go to the \
			Hospital for Sick Children. He has composed and written the lyrics for two CDs that are on iTunes. A third CD, titled In My Dreams will\
			be on iTunes shortly."},
			
		{title:"Without a leg to stand on -- 3D printing prosthetics" , link:"http://www.youtube.com/embed/LNohxpJntZo", 
			id:"LNohxpJntZo", speaker:"Matt Ratto",
			description:"Matt Ratto is an Assistant Professor in the Faculty of Information at the University of Toronto and Director of \
			the Semaphore research cluster on Inclusive Design, Mobile and Pervasive Computing. He also leads ThingTank Lab, a non-profit \
			lab space and research project examining and designing the Internet of Things. Matt’s research examines how hands-on productive work\
			– making – can supplement and extend critical reflection on the relations between digital technologies and society. His work builds upon \
			the new possibilities offered by open source software and hardware, as well as the developing technologies of 3D printing and rapid prototyping. \
			He coined the term 'critical making' to refer generally to pedagogical and research practices that blend technical and conceptual work"},
			
		{title:"Computing the climate" , link:"http://www.youtube.com/embed/CuxfRdjfZG0", 
			id:"CuxfRdjfZG0", speaker:"Steve Easterbrook",
			description:"Steve Easterbrook studies how models of complex system behaviour can help us to make wise choices about living	 sustainably on planet earth.\
			Steve’s teaching and research focusses on the dynamics of complex systems. He conducted the first detailed anthropological \
			study of how climate scientists build and test computational simulations of the earth’s climate, and is currently investigating\
			how weaknesses in people’s understanding of climate change lead to poor decision-making. In his teaching he uses hands-on simulations \
			to help students develop critical thinking skills to analyze global problems."},
			
		{title:"Innovation -- taking time to fail" , link:"http://www.youtube.com/embed/tl5GbgP1EFM", 
			id:"tl5GbgP1EFM", speaker:"Cameron Robertson & Todd Reichert",
			description:"Having been likened to modern day Wright Brothers, Todd Reichert and Cameron \
			Robertson are known for the achievement of two historical aviation firsts. In 2010, Todd and \
			Cameron led a team of engineering students to the realization of an ancient aeronautical dream with the \
			first sustained flight of a human-powered flapping-wing aircraft. For this achievement Todd and Cameron were \
			named co-recipients of the CASI Trans-Canada McKee Trophy, among the highest honours in Canadian Aerospace. As a \
			follow on to their first success, the two sought to tackle the 33-year old AHS Sikorsky Prize: a challenge requiring a\
			human-powered helicopter to reach an altitude of 3 metres and stay aloft for 60 seconds. On June 13th 2013, they achieved \
			what many had thought to be impossible, with the prize-winning flight of the Atlas helicopter."},
			
		{title:"How digital media and big data are redefining democracy" , link:"http://www.youtube.com/embed/6a59mBqyZaU", 
			id:"6a59mBqyZaU", speaker:"Clifton Van Der Linden",
			description: "Cliff is a serial innovator working at the nexus of new media, public policy, and data science. He is the founder and CEO of\
			Vox Pop Labs as well as the creator of Vote Compass, an online democratic engagement platform commissioned by the CBC that has been used by\
			millions of Canadians over the course of recent federal and provincial election campaigns. Vote Compass has also been commissioned by The Wall\
 			Street Journal and most recently by the Australian Broadcasting Corporation for national elections in the United States and Australia, respectively."},
			
		{title:"Extreme manipulation of electromagnetic waves with metamaterials" , link:"http://www.youtube.com/embed/LFxQEUDIAuk", 
			id:"LFxQEUDIAuk", speaker:"George Eleftheriades",
			description:"George Eleftheriades is a recognized international authority and pioneer in the new area of metamaterials: Man-made media with \
			electromagnetic properties that transcend those in nature. In 2002 Dr. Eleftheriade	s introduced a method for synthesizing high-quality \
			metamaterials using loaded transmission lines. Together with his graduate students, he provided the first experimental evidence of imaging\
			beyond the diffraction limit with a negative-index lens and pioneered several novel microwave and optical devices.  These include a recent \
			demonstration of the first experimental thin active cloak."
			},
			
		{title:"Why we all need to become more human" , link:"http://www.youtube.com/embed/0sxY-jS7v3U", 
			id:"0sxY-jS7v3U", speaker:"Greg Wells",
			description: "Greg Wells is a health and high performance expert who inspires better living through better nutrition and better fitness.  \
			As a coach, scientist and physiologist Dr. Wells has amassed more than 20 years of world-class experience with the extremes of human health \
			and performance.  As a result, he understands how it is possible for anyone to have better health, energy and fitness.\
			He has coached, trained and inspired dozens of elite athletes to win medals at the Commonwealth Games, World Championships and the Olympics. \
			He makes regular appearances on national television and radio as a health and performance expert, contributes articles for numerous magazines, \
			research papers for scientific journals and is a high-demand speaker for better health, fitness and performance around the world."},

		{title:"The Science Fair effect -- how youths are reinventing our world" , link:"http://www.youtube.com/embed/GYzLcpN8dso",
			id:"GYzLcpN8dso", speaker:"Jessie MacAlpine",
			description:"A newspaper article and bioherbicide lead 17-year old Jessie to discover cooking oil could be used to treat malaria.\
T			hree years ago, Jessie developed an herbicide composed of used coffee grounds and an invasive Canadian weed species. After coming across \
			a newspaper article proposing the potential for herbicides to treat malaria, she realized the active ingredient in her herbicide was naturally \
			found as mustard oil. She approached the McLaughlin-Rotman Centre for Global Health with her idea and the result was an antimalarial treatment \
			one million times cheaper than its currently available competitors. A single 10mg dose of pure, non-toxic mustard oil delivered orally could \
			significantly inhibit over 94% of infection: a simple, accessible and sustainable alternative to modern antimalarial practices."},
			
		{title:"It's time to re-evaluate our relationship with animals" , link:"http://www.youtube.com/embed/Fr26scqsIwk",
			id:"Fr26scqsIwk", speaker:"Lesli Bisgould",
			description:"Lesli Bisgould is Canada's first animal rights lawyer. For ten years, she acted for individuals and organizations in a \
			variety of animal-related cases in the only practice of its kind in the country. She has fought for the rights of students who objected to\
			dissection in science class, for critics of facilities where animals are held captive, and for changes in the law to ameliorate the legal \
			status of animals. Lesli is an adjunct professor at the University of Toronto’s faculty of law where she instructs a course on animals and the \
			law. Lesli is the author of 'Animals and the Law', the only Canadian law text on the subject, published by Irwin Law. Lesli was the 2012 international\
			law lecturer for Australian animal protection institute, Voiceless - she undertook a 12-stop lecture tour of Australia, comparing the commercial \
			hunts for seals in Canada and kangaroos in Australia. In recent years, Lesli’s full-time work has been in the human rights and poverty law fields, \
			and she is currently the Barrister at Legal Aid Ontario’s Clinic Resource Office."}
		
	];
	
	$scope.displayVideoInfo = {
		title:"The power and danger of the kiss",
		speaker:"Marcel Danesi",
		description:""
	};
	
	//first video index on the list
	$scope.currentIndexFirstDisplayedVideo = 0;
	
	//first video on the big screen
	$scope.videoLinkPlaying = $scope.videos[0].link;
	
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	};
	
	$scope.playVideo = function(index){
		$scope.videoLinkPlaying = $scope.videos[index].link;
		$scope.displayVideoInfo.title = $scope.videos[index].title;
		$scope.displayVideoInfo.speaker = $scope.videos[index].speaker;
		$scope.displayVideoInfo.description = $scope.videos[index].description;
		$window.scrollTo(0,0);
	};
	
	//videos displayed on the list
	$scope.displayVideos=[];
	for(var i=0; i<$scope.videos.length; i++){
		$scope.displayVideos.push($scope.videos[i]);
	}
	
  }]);
