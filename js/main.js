$(document).ready(function(){

	SC.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
   	})



	

	


	var playlist = ['Dave Brubeck Quartet - Take Five.mp3',
            'Herbie Hancock - Chameleon.mp3',
            'Stevie Wonder - Superstition.mp3',
            'Meters - Look - Ka Py Pyy.mp3',
				'JBs - Doing it to Death.mp3']

   var countCurrent = 0

   var audio = new Audio('media/'+playlist[countCurrent])

   document.getElementById('songCount').innerHTML=playlist[0]




 
		
	

function Jukebox(){

		this.play=function(){

			   audio.play()
   			document.getElementById('songCount').innerHTML=playlist[countCurrent]
   			
		},

		this.pause=function(){

			   audio.pause()

		},

		this.next=function(){

			   audio.pause()
   			countCurrent=((countCurrent+1)%(playlist.length))
   			audio = new Audio('media/'+playlist[countCurrent])
   			audio.play()
   			document.getElementById('songCount').innerHTML=playlist[countCurrent]
   			
		},

		this.previous=function(){

			   audio.pause()
   			countCurrent=((countCurrent+(playlist.length-1))%(playlist.length))
   			audio = new Audio('media/'+playlist[countCurrent])
   			audio.play()
   			document.getElementById('songCount').innerHTML=playlist[countCurrent]
   					
   	},

      this.volume=function(){

            // audio.volume = parseFloat(this.value / 10)
      }

}


	var jukebox = new Jukebox()

   	$('#play').click(function(){

   			jukebox.play()
 	
	   })

   	$('#pause').click(function(){

   			jukebox.pause()

   	})

   	$('#next').click(function(){

   			jukebox.next()
   		
   	})

   	$('#previous').click(function(){

   		   jukebox.previous()

   	})

      $('#volume').change(function(){
   
            audio.volume = parseFloat(this.value / 10)

      })




})