import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Band } from './band';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const bands = [
      {
        id: 1,
        name: 'The Rolling Stones',
        img: '../../assets/img/therolling.jpg',
        members: 'Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood ',
        origin: 'London, England',
        bio: `The Rolling Stones are an English rock band formed in London in 1962. Diverging from the pop rock of the early-1960s, the Rolling Stones pioneered the gritty, heavier-driven sound that came to define hard rock.[1] Their first stable line-up was vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, drummer Charlie Watts, and bassist Bill Wyman. During their formative years Brian Jones was the primary leader: he put the band together, named it, and drove the sound and look of the band. After Andrew Loog Oldham became the group's manager in 1963, he encouraged them to write their own songs. Jagger and Richards became the primary creative force behind the band, alienating Jones, who developed a drug addiction that interfered with his ability to meaningfully contribute. He left the band shortly before his death in 1969, having been replaced by guitarist Mick Taylor, who in turn left in 1974 to be replaced by Ronnie Wood. Since Wyman's departure in 1993, the band has continued on as a four-piece.`,
        sitioWeb: 'http://www.rollingstones.com',
        video: 'https://www.youtube.com/embed/Ef9QnZVpVd8',

      },
      {
        id: 2,
        name: 'Led Zeppellin',
        img: '../../assets/img/ledzeppellin.jpg',
        members: 'Robert Plant, Jimmy Page, John Paul Jones, John Bonham',
        origin: 'London, England',
        bio: `Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock. Many critics consider Led Zeppelin one of the most successful, innovative and influential rock groups in history.`,
        sitioWeb: 'https://merch.ledzeppelin.com',
        video: 'https://www.youtube.com/embed/xbhCPt6PZIU',

      },
      {
        id: 3,
        name: 'Queen',
        img: '../../assets/img/queen.jpg',
        members: 'Brian May, Roger Taylor, Freddie Mercury (fallecido), John Deacon (retirado)',
        origin: 'London, England',
        bio: `Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.
        Before forming Queen, May and Taylor had played together in the band Smile. Mercury was a fan of Smile and encouraged them to experiment with more elaborate stage and recording techniques. He joined in 1970 and suggested the name "Queen". Deacon was recruited in February 1971, before the band released their eponymous debut album in 1973. Queen first charted in the UK with their second album, Queen II, in 1974. Sheer Heart Attack later that year and A Night at the Opera in 1975 brought them international success. The latter featured "Bohemian Rhapsody", which stayed at number one in the UK for nine weeks and helped popularise the music video format.`,
        sitioWeb: 'https://queenonline.com',
        video: 'https://www.youtube.com/embed/fJ9rUzIMcZQ',
      },
      {
        id: 4,
        name: 'Pink Floyd',
        img: '../../assets/img/pinkfloyd.jpg',
        members: 'David Gilmour, Nick Mason, Richard Wright (fallecido)',
        origin: 'London, England',
        bio: `"The Tea Set" and "The T-Set" redirect here. For tea service, see tea set. For the Dutch band, see Tee-Set. For other uses, see T Set (disambiguation).
        Pink Floyd
        A black-and-white photo of five men standing in front of a brick wall.
        Pink Floyd in January 1968, from the only known photoshoot during the five months that all five members were together.
        Clockwise from bottom: Gilmour, Mason, Barrett, Waters and Wright.
        Background information
        Origin	London, England
        Genres
        Progressive rock art rock experimental rock psychedelic pop psychedelic rock
        Years active
        1965–1995 2005 2012–2014
        Labels
        EMI Columbia Tower Harvest Capitol Columbia Sony Music EMI Parlophone
        Website	pinkfloyd.com
        Past members
        Nick Mason
        Roger Waters
        Bob Klose
        Richard Wright
        Syd Barrett
        David Gilmour
        Pink Floyd were an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.`,
        sitioWeb: 'https://www.pinkfloyd.com',
        video: 'https://www.youtube.com/embed/HrxX9TBj2zY?list=PLYjaa9h0s4AYASX3_YJbzSy3XNwpTIn_8',
      },
      {
        id: 5,
        name: 'Deep Purple',
        img: '../../assets/img/deeppurple.jpg',
        members: 'Ian Paice, Roger Glover, Ian Gillan, Steve Morse, Don Airey',
        origin: 'Hertford, Hertfordshire, England',
        bio: `Deep Purple are an English rock band formed in Hertford, Hertfordshire, in 1968. They are considered to be among the pioneers of heavy metal and modern hard rock, although their musical approach has changed over the years. Originally formed as a psychedelic rock and progressive rock band, they shifted to a heavier sound with their 1970 album Deep Purple in Rock. Deep Purple, together with Led Zeppelin and Black Sabbath, have been referred to as the "unholy trinity of British hard rock and heavy metal in the early- to mid-seventies". They were listed in the 1975 Guinness Book of World Records as "the globe's loudest band" for a 1972 concert at London's Rainbow Theatre and have sold over 100 million albums worldwide.`,
        sitioWeb: 'https://deeppurple.com',
        video: 'https://www.youtube.com/embed/wZuW3YvHHLU?list=PLKQLRxwgAWY49e9Be8UTvlaLPFcBoYDsd',
      },
      {
        id: 6,
        name: 'AC/DC',
        img: '../../assets/img/acdc.jpg',
        members: 'Angus Young, Stevie Young, Brian Johnson, Cliff Williams, Phil Rudd',
        origin: 'Sídney, Nueva Gales del Sur, Australia',
        bio: `AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Their music has been variously described as hard rock, blues rock, and heavy metal, but the band themselves call it simply "rock and roll".
        AC/DC underwent several line-up changes before releasing their first album, 1975's High Voltage. Membership subsequently stabilised around the Young brothers, singer Bon Scott, drummer Phil Rudd, and bassist Mark Evans. Evans was fired from the band in 1977 and replaced by Cliff Williams, who has appeared on every AC/DC album since 1978's Powerage. In February 1980, Scott died of acute alcohol poisoning after a night of heavy drinking. The group considered disbanding but elected to stay together, bringing in longtime Geordie vocalist Brian Johnson as Scott's replacement. Later that year, the band released their first album with Johnson, Back in Black, which was dedicated to Scott's memory. The album launched AC/DC to new heights of success and became one of the best selling albums of all time.`,
        sitioWeb: 'http://www.acdc.com',
        video: 'https://www.youtube.com/embed/3tOKYFR4Rzg',
      },
      {
        id: 7,
        name: 'The Ramones',
        img: '../../assets/img/ramones.jpg',
        members: 'Joey Ramone, Johnny Ramone, Dee Dee Ramone, Tommy Ramone, Marky Ramon, Richie Ramone, Elvis Ramone, C. J. Ramone',
        origin: 'Forest Hills, Queens, New York, U.S.',
        bio: `The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens, in 1974. They are often cited as the first true punk rock group. Despite achieving only limited commercial success initially, the band was highly influential in the United States, Argentina, Brazil and most of South America, as well as Europe, including the United Kingdom, the Netherlands, Germany, Sweden and Belgium.`,
        sitioWeb: 'https://www.ramones.com',
        video: 'https://www.youtube.com/embed/HJWFsZ_YUc4?list=PLdHL2tfhDRp3WsPN1hQeQNJn5YOXryVab',
      },
      {
        id: 8,
        name: 'Kiss',
        img: '../../assets/img/kiss.jpg',
        members: 'Paul Stanley, Gene Simmons, Eric Singer, Tommy Thayer',
        origin: 'New York City, United States',
        bio: `Kiss (often stylized as KIϟϟ) is an American rock band formed in New York City in January 1973 by Paul Stanley, Gene Simmons, Ace Frehley, and Peter Criss. Well known for its members' face paint and stage outfits, the group rose to prominence in the mid–late 1970s with its shocking live performances, which featured fire breathing, blood-spitting, smoking guitars, shooting rockets, levitating drum kits, and pyrotechnics. The band has gone through several lineup changes, with Stanley and Simmons being the only members to feature in every lineup. The original and best-known lineup consists of Stanley (vocals and rhythm guitar), Simmons (vocals and bass), Frehley (lead guitar and vocals), and Criss (drums and vocals).

        With their make-up and costumes, the band members took on the personae of comic book-style characters: the Starchild (Stanley), the Demon (Simmons), the Spaceman or Space Ace (Frehley), and the Catman (Criss). Due to creative differences, both Criss and Frehley had departed the group by 1982.`,
        sitioWeb: 'https://www.kissonline.com',
        video: 'https://www.youtube.com/embed/ZhIsAZO5gl0?list=PLg6tYYDm8Njkllc2dtqvi0cTRXbtj-_9V',
      },
    ];
    return {bands};
  }

  genId(bands: Band[]): number {
    return bands.length > 0 ? Math.max(...bands.map((band) => band.id)) + 1 : 11;
  }
}
