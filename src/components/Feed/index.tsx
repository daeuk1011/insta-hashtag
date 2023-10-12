import React from "react";
import "./index.css";
import { FeedData } from "../../api";
// import { useLocation } from "react-router-dom";
// import { useFeed } from "../../hooks/api";

export const Feed: React.FC = () => {
  // const { state } = useLocation();
  // const { data } = useFeed(state.q, state.searchOption);

  const data = {
    data: [
      {
        id: "18386916355017747",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387748807_666792142096494_7428574464287974888_n.heic?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=BsjMBcgUVo0AX_YTUT_&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfB6eudiqaLh6zRAAw2DeXmgw-co0psMGi9PJHnlZIcZ_A&oe=652B8D10",
        permalink: "https://www.instagram.com/p/CySeL7Yyxyq/",
        timestamp: "2023-10-12T06:25:17+0000",
        media_type: "IMAGE",
      },
      {
        id: "18001981142137101",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/386786242_1674523499697218_8008170331081987535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=dO_ZV4Dt2NYAX_BId5n&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBmQhZHpzNwiAet5jiyMv89Gi-QFDE8V6Br_cGgSTzrAw&oe=652D0D82",
        permalink: "https://www.instagram.com/p/CySd21OLdI3/",
        timestamp: "2023-10-12T06:22:24+0000",
        media_type: "IMAGE",
      },
      {
        id: "18007111100070032",
        permalink: "https://www.instagram.com/reel/CySdYLEsAny/",
        timestamp: "2023-10-12T06:18:36+0000",
        media_type: "VIDEO",
      },
      {
        id: "17993720504081269",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/66424F2BEEEC6799725F513F7A94E581_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&vs=1302562707068638_3503905121&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC82NjQyNEYyQkVFRUM2Nzk5NzI1RjUxM0Y3QTk0RTU4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMZEVGaGZyUUprM3dvQUNBRFBHTXJiWHoyQjRicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpLl1YXg%2FoBAFQIoAkMzLBdAHVT987ZFohgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfB0_lenVTSpftX0Ptxy7FZ-Amb74j7wPUsIxvqfBH0-Kw&oe=652981E5&_nc_sid=1d576d&_nc_rid=790217f8b1",
        permalink: "https://www.instagram.com/reel/CySblUDLohI/",
        timestamp: "2023-10-12T06:04:06+0000",
        media_type: "VIDEO",
      },
      {
        id: "17991549353113022",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/C74EACAECF78738A4B568F2CC359D385_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&vs=983110872765814_2627001362&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DNzRFQUNBRUNGNzg3MzhBNEI1NjhGMkNDMzU5RDM4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOaFVNaGVXc1N4T3dqZ0NBRFg1TDVRcFZYUU1icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpy3yaC%2FyPU%2FFQIoAkMzLBdAKUOVgQYk3RgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBtOVw8GSY9pJYSMj7Is2i-9suCNXaz8tl5wGgTjZkmmg&oe=652906EC&_nc_sid=1d576d&_nc_rid=9513fc4405",
        permalink: "https://www.instagram.com/reel/CySblYnMwjM/",
        timestamp: "2023-10-12T06:04:01+0000",
        media_type: "VIDEO",
      },
      {
        id: "17898808502809506",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387684871_280876984778901_3696633997631756175_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=dL6KDpCOc-UAX_sj6s1&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAmlGOOIXkuVtxoCJhCLPmUV8i4EpfsCKZALVo0lCu5SQ&oe=652C3325",
        permalink: "https://www.instagram.com/p/CySaNrCJ9rw/",
        timestamp: "2023-10-12T05:50:34+0000",
        media_type: "IMAGE",
      },
      {
        id: "18031330012618439",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387772490_731130415516078_1141431492895700467_n.heic?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=fDbksuhXsdwAX9TCXi9&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCCbTjOVEmAYmwg7vi2ZUfowwq3-RuHZ9FMIrwGYRnOYg&oe=652BA81D",
        permalink: "https://www.instagram.com/p/CySZ0kRvgzt/",
        timestamp: "2023-10-12T05:47:08+0000",
        media_type: "IMAGE",
      },
      {
        id: "18020353174783819",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/F543FBA386ADBA554295740268BA9197_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&vs=1737704213414970_2329951201&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GNTQzRkJBMzg2QURCQTU1NDI5NTc0MDI2OEJBOTE5N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJQWMteFlLUVIzSDJoQUdBTHFNeVZha3Ric3hicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvaljfGw0f5AFQIoAkMzLBdAM86XjU%2FfOxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAkaf-KV0tHbKnXxBqQSRoiyijtboI_DXK7JEpapl9Mwg&oe=65297635&_nc_sid=1d576d&_nc_rid=008f4a615d",
        permalink: "https://www.instagram.com/reel/CySZT9QJIUJ/",
        timestamp: "2023-10-12T05:44:07+0000",
        media_type: "VIDEO",
      },
      {
        id: "18236306140241846",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387685792_1253785041965216_8667483701690565712_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=z18xUokKLYQAX9z1tWF&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBAmM6MtivYIR_DkgOylEJwD-gCnO8RplO6Bx4GehS14w&oe=652BEAAA",
        permalink: "https://www.instagram.com/p/CySYdJDPBN2/",
        timestamp: "2023-10-12T05:35:12+0000",
        media_type: "IMAGE",
      },
      {
        id: "17898740069864739",
        permalink: "https://www.instagram.com/p/CySYZEWOWQa/",
        timestamp: "2023-10-12T05:34:39+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "17929669070773060",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t39.30808-6/387785832_738131074996745_4837558370036063113_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=uqGrI9hUlzgAX_9u9rz&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfDvd0VFIZIUMtF2cxRTxvNBQyUOKGLIPfCs_p9DuUhhgg&oe=652BEE93",
        permalink: "https://www.instagram.com/p/CySVYy5KBEj/",
        timestamp: "2023-10-12T05:08:24+0000",
        media_type: "IMAGE",
      },
      {
        id: "17971984148622703",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387800929_322550860368763_7098438696121412131_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=wS0J9QCokTgAX-wlhX3&_nc_oc=AQlniOPK-8ToXz9q76q20MoycHAw269lVUiSRFOjMIU5rdxKr04mgNkxDinmMkUeRFs&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfD4fcUYl0jJzc8MLLu9aJz9Cw9upj0fZjimyQ9WIGAh_w&oe=652D2BEC",
        permalink: "https://www.instagram.com/p/CySUtZ4rFuA/",
        timestamp: "2023-10-12T05:02:28+0000",
        media_type: "IMAGE",
      },
      {
        id: "18076144966408375",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t39.30808-6/387841085_818407970288007_3947303190205507696_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=TcV67bgHdjwAX_4sikd&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCy1r4UDt7H75j0LKxl9TsZv4Q625mlPdHV2hK-fTyQcw&oe=652D3E82",
        permalink: "https://www.instagram.com/p/CySUcoXrJ_2/",
        timestamp: "2023-10-12T05:00:11+0000",
        media_type: "IMAGE",
      },
      {
        id: "17976480128344139",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t39.30808-6/387041601_122109951236055256_7984459455621519836_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=pH3eTD53ZQ4AX_7-emx&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCoQHjXh00S7Vl3oXDQgxj2Yc3sTVSu_V01areSPpfyMw&oe=652C23D1",
        permalink: "https://www.instagram.com/p/CySUcDLN2oj/",
        timestamp: "2023-10-12T05:00:06+0000",
        media_type: "IMAGE",
      },
      {
        id: "17977732562339073",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387656977_1761928214240341_5276188421897470574_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=A9H_w7CLsjQAX-_tY4T&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBeGI3tDg_jjZMJj7pvfy8Iu0QIRUbNzRi288fIhUn5aQ&oe=652BF19A",
        permalink: "https://www.instagram.com/p/CySSlVrSjq_/",
        timestamp: "2023-10-12T04:43:53+0000",
        media_type: "IMAGE",
      },
      {
        id: "18033656989545850",
        permalink: "https://www.instagram.com/p/CySOvxvsJXo/",
        timestamp: "2023-10-12T04:10:22+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "18056043208465465",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/9A4D4F1F7403EC21D40E0A28A426E697_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNDgwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&vs=1081701086326454_1499219547&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC85QTRENEYxRjc0MDNFQzIxRDQwRTBBMjhBNDI2RTY5N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNU1pGaGVJczNTcnViTURBQTlmRnRDWDdwcHNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpbD%2FqDirqdBFQIoAkMzLBdANT87ZFocrBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAdRuTJssCmUuAS8PSdtJ0Jig90KDZUX82L9nLj1wyO4A&oe=65296823&_nc_sid=1d576d&_nc_rid=3d50f060ba",
        permalink: "https://www.instagram.com/reel/CySNXb2vloq/",
        timestamp: "2023-10-12T04:08:08+0000",
        media_type: "VIDEO",
      },
      {
        id: "18063507247444696",
        permalink: "https://www.instagram.com/p/CySNEBMx6cA/",
        timestamp: "2023-10-12T03:55:39+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "18264888121161838",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387727887_1785341125246162_3735306817413437172_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=E-Y2HSV-ReUAX_2SETw&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAJfIRcLXM-ipqSDNIZwFQaqTyNwOSOxnmUsv6vDT77hA&oe=652C0C90",
        permalink: "https://www.instagram.com/p/CySLwy7SQp1/",
        timestamp: "2023-10-12T03:44:17+0000",
        media_type: "IMAGE",
      },
      {
        id: "18121405687315844",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/864F55ACD61560B4A074F4A7D78B8993_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&vs=339842841776442_3827115084&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84NjRGNTVBQ0Q2MTU2MEI0QTA3NEY0QTdENzhCODk5M192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNQ3JGaGRYSDRldHViY1hBR0swWU1WQmpsOUhicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJszx2ummnv9AFQIoAkMzLBdANiIMSbpeNRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBvCnr2dLtrNhSE8RpnESJQbomggkay-2x86_ky5vCmRg&oe=6529503B&_nc_sid=1d576d&_nc_rid=03fa226393",
        permalink: "https://www.instagram.com/reel/CySKmLAs9O7/",
        timestamp: "2023-10-12T03:39:48+0000",
        media_type: "VIDEO",
      },
      {
        id: "17973387188409780",
        permalink: "https://www.instagram.com/reel/CySKIFMvrAA/",
        timestamp: "2023-10-12T03:30:28+0000",
        media_type: "VIDEO",
      },
      {
        id: "18013884703907325",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387708643_1030552997987132_6595477889726221252_n.heic?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=cv8pXsODl98AX_nbnvL&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCaoE6dDpPlh6266Nz4q_IjlH07uuvPBmcfpLsmagXgRQ&oe=652BFD42",
        permalink: "https://www.instagram.com/p/CySJz1Yu2tx/",
        timestamp: "2023-10-12T03:27:14+0000",
        media_type: "IMAGE",
      },
      {
        id: "18012148768782157",
        permalink: "https://www.instagram.com/p/CySIWAVPxhj/",
        timestamp: "2023-10-12T03:14:25+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "18016954954877488",
        permalink: "https://www.instagram.com/p/CySDgcHy32b/",
        timestamp: "2023-10-12T02:32:09+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "18304109032188181",
        permalink: "https://www.instagram.com/reel/CySCKTwu8P1/",
        timestamp: "2023-10-12T02:20:39+0000",
        media_type: "VIDEO",
      },
      {
        id: "17999946293159254",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387678401_336196798820262_6670133409225012941_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=QaR2_w779T8AX-x2vsV&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBQ2Nd_vzE8DpMt_XunnzcQPOnAoB1SUmDCYgFSq2zZOg&oe=652BDBC2",
        permalink: "https://www.instagram.com/p/CySCHARrC-8/",
        timestamp: "2023-10-12T02:19:56+0000",
        media_type: "IMAGE",
      },
      {
        id: "18050611231496950",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/B044202CD5A5EBA041D44E9545D66B9D_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&vs=704417414447222_3087586622&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CMDQ0MjAyQ0Q1QTVFQkEwNDFENDRFOTU0NUQ2NkI5RF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEZHpaQmZkY09iRE0zTURBSFliQjRJT0N5ZzdicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoLKhbf1hu8%2FFQIoAkMzLBdAMKwIMSbpeRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfDXmKf6u3YcmkX01di3ir0j6QN-USjjinYkcrxoIsQW_w&oe=65291C58&_nc_sid=1d576d&_nc_rid=4ddeece1a0",
        permalink: "https://www.instagram.com/reel/CySB9qVL1PE/",
        timestamp: "2023-10-12T02:19:00+0000",
        media_type: "VIDEO",
      },
      {
        id: "18160145641291236",
        media_url:
          "https://video-ssn1-1.cdninstagram.com/v/t42.1790-2/388933725_168084603022138_3821328331830091499_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=qZjgYnOA660AX_eQ2DQ&_nc_ht=video-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBpdboZUXbGustxRnQXkkTSBBvJXR9uxzGWyEprnx9X4A&oe=652BC061",
        permalink: "https://www.instagram.com/reel/CySB_NyK-T7/",
        timestamp: "2023-10-12T02:18:59+0000",
        media_type: "VIDEO",
      },
      {
        id: "18286293190148206",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387672400_285690177662992_2598773813383186668_n.heic?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=xq9cEaZ1qj8AX8kgkaa&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCxcap7yfNa9KNm3McuCTJiOog-TkpgsLvjyuqST4em4g&oe=652C304F",
        permalink: "https://www.instagram.com/p/CySBVMSCRFh/",
        timestamp: "2023-10-12T02:13:08+0000",
        media_type: "IMAGE",
      },
      {
        id: "17912240726752969",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387674906_990394919067755_3615452820899113511_n.heic?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=if_dyIORWFMAX_e_Dkl&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfDALcCFBmlT2mp7ESeFLLR-5U6DZTptTjx7GvMXfiuPMg&oe=652BA09C",
        permalink: "https://www.instagram.com/p/CySBT-rChEF/",
        timestamp: "2023-10-12T02:12:58+0000",
        media_type: "IMAGE",
      },
      {
        id: "17958971033652968",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/386295055_3480815342180882_3195819473468115299_n.heic?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=9R6um3oXYtwAX8tR3fq&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCOHjgm0EdtB0-JzpNKM9WUkjBlSn26c-Kzn-eJyehMHw&oe=652BB1F6",
        permalink: "https://www.instagram.com/p/CySBSf9iINc/",
        timestamp: "2023-10-12T02:12:46+0000",
        media_type: "IMAGE",
      },
      {
        id: "18388916197051147",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387727649_198501966527732_4329859715641006384_n.heic?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=GBwFrl2n7SMAX_vdBmx&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfD9tlO3MqZMDHlOnP30jYyRaaastb61hJ3YHcU44Cvoew&oe=652CDE0F",
        permalink: "https://www.instagram.com/p/CySBP0ICDIo/",
        timestamp: "2023-10-12T02:12:24+0000",
        media_type: "IMAGE",
      },
      {
        id: "17996215481209356",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387742859_1574377889635223_2117733347067882056_n.heic?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=7UfNk3g-RcQAX-oA6AF&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAcmcBORqiK6iTrWirhfvkIFB-r-F_BA1e0iOg7P8V2iw&oe=652D07A1",
        permalink: "https://www.instagram.com/p/CySBPbtCVp-/",
        timestamp: "2023-10-12T02:12:21+0000",
        media_type: "IMAGE",
      },
      {
        id: "18306408757119820",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387754983_272198545798205_7412797712459569721_n.heic?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=EyQ5Qu5oOzcAX_q5oQS&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBe7oqR0SLY2QOiaMPzVLpO-6GO_fddZ6DoId9pSc_7eg&oe=652D3632",
        permalink: "https://www.instagram.com/p/CySBOoEiz7x/",
        timestamp: "2023-10-12T02:12:14+0000",
        media_type: "IMAGE",
      },
      {
        id: "18019351186789182",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/D04BAB46D29E5DF7CC1A14AC847A3AA5_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNDgwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&vs=230143913399610_1680400503&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EMDRCQUI0NkQyOUU1REY3Q0MxQTE0QUM4NDdBM0FBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQZXNNaGM3OHROb1lEQUNBSUc0R2k3dDExOHZicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsyJ%2BbWrnbs%2FFQIoAkMzLBdAI%2FhR64UeuBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBDhyBccy8cm5cncFmRA8YAfOW0TktFlGHYrwKrjkgobA&oe=652977FB&_nc_sid=1d576d&_nc_rid=424cd04bf4",
        permalink: "https://www.instagram.com/reel/CySAHxNu4Ys/",
        timestamp: "2023-10-12T02:11:16+0000",
        media_type: "VIDEO",
      },
      {
        id: "18003485902903580",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/390915082_292626173620120_2859599816142105370_n.heic?stp=dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=1K5vFI4LJ6AAX8Tp8fH&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfDmfCG334lZFgQqm5mSo5Nav0Id-xnAI4IadXpOsn-Z1A&oe=652C5B1B",
        permalink: "https://www.instagram.com/p/CySBD3_CE4Y/",
        timestamp: "2023-10-12T02:10:46+0000",
        media_type: "IMAGE",
      },
      {
        id: "17942485136620300",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/391464931_1508096596607045_2225822382951537978_n.heic?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=o8mqZwJOOZQAX9RhcMG&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBBatMdrqeF556Vzik3OuPRPiWXRA4Qqi088qDAR-o-RA&oe=652C6775",
        permalink: "https://www.instagram.com/p/CySBC3eCBc1/",
        timestamp: "2023-10-12T02:10:38+0000",
        media_type: "IMAGE",
      },
      {
        id: "17998772774490960",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/390765365_218752684379904_4127215140444018700_n.heic?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=abC6Qn7JjT8AX84ADpy&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAzbpsfpRlDxV7zYSTObESyJNj_anUMJxr5urrHWKlPBA&oe=652CEC95",
        permalink: "https://www.instagram.com/p/CySBAxBipzX/",
        timestamp: "2023-10-12T02:10:21+0000",
        media_type: "IMAGE",
      },
      {
        id: "18009193534950437",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/391058586_997006131586933_2016967606829066988_n.heic?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=5lH0F5YJhQ0AX9gyU22&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfA8e8C_9Sdsd_d46l7LJBkIJVrxQ7thcW2pbuseUnwskA&oe=652CC61D",
        permalink: "https://www.instagram.com/p/CySA__ZCOWv/",
        timestamp: "2023-10-12T02:10:15+0000",
        media_type: "IMAGE",
      },
      {
        id: "18027304939723832",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387301173_673460884850288_5006935315125786028_n.heic?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=I2AyeDasaD4AX-sOcrB&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBOp-mZANDAcBiaqp3QVSNWGBIhFBhD5eh4UDtgpbuwLQ&oe=652CF40C",
        permalink: "https://www.instagram.com/p/CySA_5DCxHm/",
        timestamp: "2023-10-12T02:10:14+0000",
        media_type: "IMAGE",
      },
      {
        id: "18017466058846450",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387733844_1382174039316100_2123025591562178622_n.heic?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=8yo1nQzs01wAX-kY_Y1&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBgMyBbonGNptFJI6V3Fjb-Q0HT9Qi3DGnPsudT4XSG7w&oe=652BBC6F",
        permalink: "https://www.instagram.com/p/CySA-qmiFGU/",
        timestamp: "2023-10-12T02:10:04+0000",
        media_type: "IMAGE",
      },
      {
        id: "18280016446145336",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/C0418741FEA42F122DACDE74C846119A_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&vs=7157232307641859_402348483&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DMDQxODc0MUZFQTQyRjEyMkRBQ0RFNzRDODQ2MTE5QV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHWndGaGRvd2NpenpRQUJBQ2FTOThZTlZ2NUticV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJo7e9LTjxvc%2FFQIoAkMzLBdAILtkWhysCBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCtLnp3zwyPAd18cmnYpbEQ8X2e5nFMrpqinZ4lHaI2oQ&oe=65296114&_nc_sid=1d576d&_nc_rid=3b445d8f18",
        permalink: "https://www.instagram.com/reel/CySAj1EyWNM/",
        timestamp: "2023-10-12T02:07:48+0000",
        media_type: "VIDEO",
      },
      {
        id: "18011189002937996",
        permalink: "https://www.instagram.com/p/CySAY_3sUst/",
        timestamp: "2023-10-12T02:04:55+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "17911867808753406",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387779423_6597534703661030_298099075576326420_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=SWBQLsN3-m8AX9xMbeD&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfDojmrSiTkrYuQR5whvXZQRJnbI9Oshzj6AKYoSPu5Twg&oe=652D727B",
        permalink: "https://www.instagram.com/p/CyR_ERdotM_/",
        timestamp: "2023-10-12T01:53:21+0000",
        media_type: "IMAGE",
      },
      {
        id: "18033399034591122",
        permalink: "https://www.instagram.com/p/CyR-s3ghZWW/",
        timestamp: "2023-10-12T01:50:09+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "17916610886804379",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/o1/v/t16/f1/m82/314B06CB3A003D97EADC8AD4899CABB6_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzE4LmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&vs=799620131916689_2735461334&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8zMTRCMDZDQjNBMDAzRDk3RUFEQzhBRDQ4OTlDQUJCNl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKR0FNaGVOTUhsN1NHMEVBTXRaUndRT1MyQmZicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvDJ9ZezmuI%2FFQIoAkMzLBdAI92yLQ5WBBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfB54mBujmhKMrkG9jRuEIJ-NgOBVOnou79ft7iqqLL64w&oe=6529324E&_nc_sid=1d576d&_nc_rid=384ee77d3e",
        permalink: "https://www.instagram.com/reel/CyR-RYkMAlr/",
        timestamp: "2023-10-12T01:46:37+0000",
        media_type: "VIDEO",
      },
      {
        id: "18305268088189873",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387692698_1015907476301414_1872168185663582571_n.heic?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=4mTO068U64gAX-Y7mQ6&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfDQ6ZWNMyohnO6BprklO3wh53bPoNH1v3a3GPtYYB-mlA&oe=652D4E0E",
        permalink: "https://www.instagram.com/p/CyR9576tYiX/",
        timestamp: "2023-10-12T01:43:12+0000",
        media_type: "IMAGE",
      },
      {
        id: "18016001080889353",
        permalink: "https://www.instagram.com/p/CyR83oeOqAi/",
        timestamp: "2023-10-12T01:34:09+0000",
        media_type: "CAROUSEL_ALBUM",
      },
      {
        id: "17998537673505389",
        media_url:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.29350-15/387772050_1748942092255251_433247760356551439_n.heic?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=HrBIORJCgYQAX_r9i9F&_nc_ht=scontent-ssn1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfC2AJPUZJsxjZ0xvDM0m_AkwzZm-yjYDDPR_SB3sVArDQ&oe=652C270F",
        permalink: "https://www.instagram.com/p/CyR6x8Gx5xY/",
        timestamp: "2023-10-12T01:15:54+0000",
        media_type: "IMAGE",
      },
      {
        id: "18007832320989456",
        permalink: "https://www.instagram.com/p/CyRf8qzJJZc/",
        timestamp: "2023-10-11T21:21:26+0000",
        media_type: "CAROUSEL_ALBUM",
      },
    ],
    paging: {
      cursors: {
        after:
          "UVZAGRVdIRlhMVFEzWnpoNVFtdEdNMEZApTld0aGFWOVlSazVxYkhwV1dYVnNhVVJDV25KRVN6Um9jMFpDVkdKcmFXcFBhbmhqYzJzd1ZAWQnJWWEpGZAG01UlJYTlNUR2xKVWxKTVRrZA3lhSGx3TjJsVE9HdHJVdz09",
      },
      next: "https://graph.facebook.com/v18.0/17841593698074073/recent_media?access_token=EAAEyN36dwYkBO1qdAK9ZCNffrqECngWRc6D5b5yZAxrcgO9PAdp2ZALhKeM5OFNt2JgJEGBvolcZBraKMRRfZBtHH2hxGFmLH2XADj6krqXe5G5c9WdIa3IfOVKRQy2ZBYoLkJxYafhSvbdwVcdY7RMKl2iLSAW90mYiDUXPktg9qd2KlgA9ZBXiEvb8gXkriT6oXNZBRqbdpnlDoHkX6yi5K71ZCAuwZD&fields=id%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cmedia_type&pretty=0&user_id=17841414784975563&limit=50&after=UVZAGRVdIRlhMVFEzWnpoNVFtdEdNMEZApTld0aGFWOVlSazVxYkhwV1dYVnNhVVJDV25KRVN6Um9jMFpDVkdKcmFXcFBhbmhqYzJzd1ZAWQnJWWEpGZAG01UlJYTlNUR2xKVWxKTVRrZA3lhSGx3TjJsVE9HdHJVdz09",
    },
  };

  return (
    <>
      <div className="feed-grid">
        {data?.data?.map((feedData: FeedData) => (
          <>
            <div key={feedData.id} className="feed-item">
              {feedData.media_type === "VIDEO" ? (
                <video loop muted autoPlay width={200} height={350} onClick={() => window.open(feedData.permalink)}>
                  <source src={feedData.media_url} />
                </video>
              ) : (
                <img
                  width={200}
                  height={350}
                  style={{
                    objectFit: "cover",
                  }}
                  src={feedData.media_url}
                  onClick={() => window.open(feedData.permalink)}
                />
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};
