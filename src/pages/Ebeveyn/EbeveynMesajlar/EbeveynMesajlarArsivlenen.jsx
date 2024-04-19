import React from 'react'
import "./../../../styles/Ebeveyn/EbeveynMesajlar/EbeveynMesajlarArsivlenen.css"
import kullanıcı2 from "./../../../assets/BakiciMesajlarPhoto1.svg"
import kullanıcı3 from "./../../../assets/BakiciMesajlarPhoto2.svg"
import kullanıcı1 from "./../../../assets/BakiciMesajlarPhoto3.svg"
import garbage from "./../../../assets/BakiciMesajlarCöpKutusu.svg"
import { useState } from 'react'
import location from "./../../../assets/BakiciMesajlarLocation2.svg"
import media from "./../../../assets/BakiciMesajlarMedia.svg"
import { useRef } from 'react'
import { useEffect } from 'react'
const data = [{
  id: 1,
  name:"Sude Can",
  image:kullanıcı1,
  location:"Ankara, Demetevler",
  message_date:"8 Haziran 2023",
  date:"20.08.2023 - 25.08.2023",
  time_duration: "5 gün sadece gündüz",
  messages:[{
    whoSend:"sender",
    message:"Merhaba Neslihan Hanım. Profilinizi dikkatle inceledim, gördüğüm kadarıyla deneyiminiz var ve insanlar memnun kalmışlar. Haftaya pazartesi eşimle şehir dışına gitmemiz gerekiyor ve 4 yaşındaki oğluma bir geceliğine bakacak birini alıyorum. Muhtemelen ertesi gün öğleden sonra dönmüş olacağız. Profilinizde gecelik tarifesinde fiyatın 250 lira olduğunu yazmışsınız, ertesi gün ile beraber toplam ne kadara anlaşırız merak ettim. İyi günler dilerim.",
    message_date:"15:00"
  },
  {
    whoSend:"receiver",
    message:"Merhabalar John Bey. Takvimime baktım ve belirttiğiniz tarihlerde uygun olduğum gözüküyor. Gündüz tarifesinde ekstra saatlerin fiyatı 30 lira, ertesi gün geleceğiniz saate göre fiyat artış gösterecektir. Oğlunuzun alerjisi veya hastalığı var mı? Bunun dışında sevdiği ve sevmediği yemekler ve oyunlar hakkında bilgilendirirseniz sevinirim.",
    message_date:"15:28"
  },
  {
    whoSend:"sender",
    message:"Alerjisi ya da hastalığı yok. Çok fazla olmayacak şekilde akşam yemeğinden sonra buzluktaki dondurmadan verebilirsiniz. Akşam 7’de Cartoon Network’te Gumball başlıyor, çok seviyor onu. Oyuncak kutusu var zaten, odasında oynar o, salonu dağıtmasına izin vermezseniz sevinirim.",
    message_date:"15:43"
  },
]

},
{
  id: 2,
  name:"David John",
  image:kullanıcı2,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
  message_date:"8 Haziran 2023",
  time_duration: "5 gün sadece gündüz",
  messages:[{
    whoSend:"sender",
    message:"Merhaba Neslihan Hanım. Profilinizi dikkatle inceledim, gördüğüm kadarıyla deneyiminiz var ve insanlar memnun kalmışlar. Haftaya pazartesi eşimle şehir dışına gitmemiz gerekiyor ve 4 yaşındaki oğluma bir geceliğine bakacak birini alıyorum. Muhtemelen ertesi gün öğleden sonra dönmüş olacağız. Profilinizde gecelik tarifesinde fiyatın 250 lira olduğunu yazmışsınız, ertesi gün ile beraber toplam ne kadara anlaşırız merak ettim. İyi günler dilerim.",
    message_date:"15:00"
  },
  {
    whoSend:"receiver",
    message:"Merhabalar John Bey. Takvimime baktım ve belirttiğiniz tarihlerde uygun olduğum gözüküyor. Gündüz tarifesinde ekstra saatlerin fiyatı 30 lira, ertesi gün geleceğiniz saate göre fiyat artış gösterecektir. Oğlunuzun alerjisi veya hastalığı var mı? Bunun dışında sevdiği ve sevmediği yemekler ve oyunlar hakkında bilgilendirirseniz sevinirim.",
    message_date:"15:28"
  },
  {
    whoSend:"sender",
    message:"Alerjisi ya da hastalığı yok. Çok fazla olmayacak şekilde akşam yemeğinden sonra buzluktaki dondurmadan verebilirsiniz. Akşam 7’de Cartoon Network’te Gumball başlıyor, çok seviyor onu. Oyuncak kutusu var zaten, odasında oynar o, salonu dağıtmasına izin vermezseniz sevinirim.",
    message_date:"15:43"
  },
],
},
{
  id: 3,
  name:"Ahmet Kizilay",
  image:kullanıcı3,
  location:"Ankara, Demetevler",
  date:"20.08.2023 - 25.08.2023",
   message_date:"8 Haziran 2023",
  time_duration: "5 gün sadece gündüz",
  messages:[{
    whoSend:"sender",
    message:"Merhaba Neslihan Hanım. Profilinizi dikkatle inceledim, gördüğüm kadarıyla deneyiminiz var ve insanlar memnun kalmışlar. Haftaya pazartesi eşimle şehir dışına gitmemiz gerekiyor ve 4 yaşındaki oğluma bir geceliğine bakacak birini alıyorum. Muhtemelen ertesi gün öğleden sonra dönmüş olacağız. Profilinizde gecelik tarifesinde fiyatın 250 lira olduğunu yazmışsınız, ertesi gün ile beraber toplam ne kadara anlaşırız merak ettim. İyi günler dilerim.",
    message_date:"15:00"
  },
  {
    whoSend:"receiver",
    message:"Merhabalar John Bey. Takvimime baktım ve belirttiğiniz tarihlerde uygun olduğum gözüküyor. Gündüz tarifesinde ekstra saatlerin fiyatı 30 lira, ertesi gün geleceğiniz saate göre fiyat artış gösterecektir. Oğlunuzun alerjisi veya hastalığı var mı? Bunun dışında sevdiği ve sevmediği yemekler ve oyunlar hakkında bilgilendirirseniz sevinirim.",
    message_date:"15:28"
  },
  {
    whoSend:"sender",
    message:"Alerjisi ya da hastalığı yok. Çok fazla olmayacak şekilde akşam yemeğinden sonra buzluktaki dondurmadan verebilirsiniz. Akşam 7’de Cartoon Network’te Gumball başlıyor, çok seviyor onu. Oyuncak kutusu var zaten, odasında oynar o, salonu dağıtmasına izin vermezseniz sevinirim.",
    message_date:"15:43"
  },
],
}
]




const EbeveynArsivlenenMesajlar = ({selectedNumber} ) => {
  const [first, setfirst] = useState(data)
  const [selectedUser, setselectedUser] = useState(data[0]);
  const [selectedComp, setselectedComp] = useState(0);
  const [messa, setMessa] = useState("");
  const inputFile = useRef(null) ;
  const [boxOpen, setboxOpen] = useState(false);
  const [key, setKey] = useState(0)
  const clickedp = () =>{
    selectedNumber(7);
  }
  const changeUse = (data) =>{
    setselectedComp(0);
    setselectedUser(data);
  }
  const removeDialog = (e) =>{
    first.map((dat,i) =>{
      if(dat.id==selectedUser.id){
        first.splice(i, 1);
      }
    })
    
    setselectedUser(first[0]);
    setselectedComp(0);
    setfirst(first);
    e.preventDefault();
  }

  const removeDialog2 = () =>{
  first.map((dat,i) =>{
      if(dat.id==selectedUser.id){
        first.splice(i, 1);
      }
    })
    
    console.log(first);
    setfirst(first);
    setKey(key+1)
  }

  const mediaOnclick = () =>{
    inputFile.current.click();
  }

  const sendMessage = (e) =>{
    let date = new Date();
    let now = `${date.getHours()}:${date.getMinutes()}`;
    
    selectedUser.messages.push(
      {
    whoSend:"sender",
    message: messa,
    message_date:now
    }
    );

    first.map((dat,i) =>{
      if(dat.id==selectedUser.id){
        dat.messages=selectedUser.messages
      }
    })


    setselectedUser(selectedUser);
    setfirst(first);
    setMessa("");
    
  }

  const openBox = () => {
    setboxOpen(true);
  }
 
  useEffect(() => {
    const scrollingElement = document.getElementById("scrolling_element");
    if(scrollingElement){
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }
    
  });

  useEffect(() => {
    // setPosts Here
    setselectedUser(first[0])
    }, [key]);


  return (
    <div>
    <div className='EbeveynMesajlarGelenKutusu'>
    <p className='EbeveynMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    </div>
    <div className='EbeveynMesajlarArsivlenen'>
    <div className='EbeveynMesajlarOnayBekleyen-Left-Div'>
    <h3 className='EbeveynMesajlarArsivlenen-Left-Div-h3'>Arşivlenen Mesajlar</h3>
  
    {
      first.map((dat) =>{
        return (
          <>
          <hr />
          <div className='EbeveynMesajlarOnayBekleyen-Left-Div-Data' onClick={() => changeUse(dat)}>
         
            <img src={dat.image} alt="" />
            <p className='EbeveynMesajlarOnayBekleyen-Left-Div-Name'>{dat.name}</p>
            {(() => {
              if (dat.name == selectedUser.name) {
                return (
                  <>
                  <p className='EbeveynMesajlarOnayBekleyen-Left-Div-Name-ThreeDot' onClick={() => openBox()}>...</p>
                  {
                    boxOpen &&  <div className='EbeveynMesajlarOnayBekleyen-Left-Div-Box'>
                      
                      <p className='EbeveynMesajlarOnayBekleyen-Left-Div-Box-Sil' onClick={removeDialog2}>Sil</p>
                     
                    

                      <p>Okunmadı olarak işaretle</p>
                      <p>Okundu olarak işaretle</p>
                    </div>
                  }
                  </>
                )
              }else {
                return (
                  <div></div>
                )
              }
            })()}
          </div>
          </>
        
        )
      })
    }

    </div>
    {
      selectedUser && 
      <div className='EbeveynMesajlarArsivlenen-Right'>
        <div className='EbeveynMesajlarArsivlenen-Right-Top' onClick={removeDialog}>
          <img src={garbage} alt="" className='EbeveynMesajlarArsivlenen-Right-Top-TrashImg'/>
          <p className='EbeveynMesajlarArsivlenen-Right-Top-Remove'>Dialoğu sil</p>
        </div>
        <div className='EbeveynMesajlarArsivlenen-Right-Middle'>
          <div className='EbeveynMesajlarArsivlenen-Right-Middle-Top'> 
              <div className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Left'>
                  <img src={selectedUser?.image} alt="" className='EbeveynMesajlarArsivlenen-Left-Middle-Top-Right-Img'/>
                  <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Left-Desc'>{selectedUser?.name}</p>
              </div>
              <div className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Right'>
              <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Right-Desc'>İletişim bilgilerini gör</p>
              </div>
          </div>
          <hr className='EbeveynMesajlarArsivlenen-Right-Middle-Top-HR'/>
          <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date'>{selectedUser?.message_date}</p>
          
          <div className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Messages' id='scrolling_element'> 
          {
            
            selectedUser?.messages?.map((mes) =>{
              return (
                <>
                
                  {
                    mes.whoSend == "sender" ? <div className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date-Sender'>
                    <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date-Sender-Message'> {
                      mes.message
                    }</p>  
                    <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date-Sender-MessageDate'> {
                      mes.message_date
                    }</p>  
                   
                    
                    </div> : <div className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date-Receiver'>
                    <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date-Receiver-Message'> {
                      mes.message
                    }</p>  
                    <p className='EbeveynMesajlarArsivlenen-Right-Middle-Top-Date-Receiver-MessageDate'> {
                      mes.message_date
                    }</p>  
                    </div>
                  }
                </>
              )
            })
          }
          </div>
       
        
          </div>
        <div className='EbeveynMesajlarArsivlenen-Right-Bottom'>
          
        <div className="EbeveynMesajlarArsivlenen-Right-Bottom-Inputs">
        <input
        type="text"
        placeholder="Mesajınız"
        id="message_id"
        value={messa} 
        onChange={(e)=>setMessa(e.target.value)}
        className="EbeveynMesajlarArsivlenen-Right-Bottom-Input"
        />   
        <img src={location} alt="" className="EbeveynMesajlarArsivlenen-Right-Bottom-Input-Location"/>
        <img src={media} alt="" className="EbeveynMesajlarArsivlenen-Right-Bottom-Input-Media" id="file-input" onClick={() => mediaOnclick()}/>
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
        </div>
         
          
          <button type="submit" className="EbeveynMesajlarArsivlenen-Right-Bottom-Button" onClick={() => sendMessage()}>
          Gönder
          </button>
        </div>
      
      </div>
    }
    </div>
    </div>
  )
}

export default EbeveynArsivlenenMesajlar;