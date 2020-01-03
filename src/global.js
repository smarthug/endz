import create from 'zustand'
import produce from 'immer'
import { Next } from './Pages/Main'

export const data = {
    pages: [
        { type: "title", title: "운수 좋은 날 2020" },


        {
            page: 0,
            type: "text",
            img: "https://cpb-us-w2.wpmucdn.com/blogs.baylor.edu/dist/c/3127/files/2015/12/DQ-Screen-Shot-2015-12-04-at-4.10.29-PM-29wbxtz.png",
            options: {
                choices: [
                    { text: "A로 간다", result: () => { console.log("A로 간다"); Next(0) } },
                    { text: "B로 간다", result: () => { console.log("B로 간다"); Next(0) } },
                    { text: "C로 간다", result: () => { console.log("C로 간다"); Next(0) } }
                ]
            },
            text: `침하게 흐린 품이 눈이 올 듯하더니 눈은 아니 오고 얼다가 만 비가 추적추적 내리었다.

        이날이야말로 동소문 안에서 인력거꾼 노릇을 하는 김 첨지에게는 오래간만에도 닥친 운수 좋은 날이었다. 문안에(거기도 문밖은 아니지만) 들어간답시는 앞집 마나님을 전찻길까지 모셔다 드린 것을 비롯으로 행여나 손님이 있을까 하고 정류장에서 어정어정하며 내리는 사람 하나하나에게 거의 비는 듯한 눈결을 보내고 있다가 마침내 교원인 듯한 양복장이를 동광학교(東光學校)까지 태워다 주기로 되었다.
        
        첫번에 삼십 전, 둘째 번에 오십 전 - 아침 댓바람에 그리 흔치 않은 일이었다. 그야말로 재수가 옴붙어서 근 열흘 동안 돈 구경도 못한 김 첨지는 십 전짜리 백통화 서 푼, 또는 다섯 푼이 찰깍하고 손바닥에 떨어질 제 거의 눈물을 흘릴 만큼 기뻤었다. 더구나 이날 이때에 이 팔십 전이라는 돈이 그에게 얼마나 유용한지 몰랐다. 컬컬한 목에 모주 한 잔도 적실 수 있거니와 그보다도 앓는 아내에게 설렁탕 한 그릇도 사다줄 수 있음이다.` },
        { type: "three", model: '18569_Human-Pulled Rickshaw_v1.obj' },
        {
            page: 1, type: "text", text: `그의 아내가 기침으로 쿨럭거리기는 벌써 달포가 넘었다. 조밥도 굶기를 먹다시피 하는 형편이니 물론 약 한 첩 써 본 일이 없다. 구태여 쓰려면 못 쓸 바도 아니로되 그는 병이란 놈에게 약을 주어 보내면 재미를 붙여서 자꾸 온다는 자기의 신조(信條)에 어디까지 충실하였다. 따라서 의사에게 보인 적이 없으니 무슨 병인지는 알 수 없으되 반듯이 누워 가지고, 일어나기는 새로 모로도 못 눕는걸 보면 중증은 중증인 듯. 병이 이대도록 심해지기는 열흘 전에 조밥을 먹고 체한 때문이다.

        그때도 김 첨지가 오래간만에 돈을 얻어서 좁쌀 한 되와 십 전짜리 나무 한 단을 사다 주었더니 김 첨지의 말에 의지하면 그 오라질 년이 천방지축(天方地軸)으로 남비에 대고 끓였다. 마음은 급하고 불길은 닿지 않아 채 익지도 않은 것을 그 오라질 년이 숟가락은 고만두고 손으로 움켜서 두 뺨에 주먹덩이 같은 혹이 불거지도록 누가 빼앗을 듯이 처박질 하더니만 그날 저녁부터 가슴이 땅긴다, 배가 켕긴다고 눈을 홉뜨고 지랄병을 하였다. 그때 김 첨지는 열화와 같이 성을 내며,
        
        “에이, 오라질 년, 조롱복은 할 수가 없어, 못 먹어 병, 먹어서 병, 어쩌란 말이야! 왜 눈을 바루 뜨지 못해!”하고 김 첨지는 앓는 이의 뺨을 한 번 후려갈겼다. 홉뜬 눈은 조금 바루어졌건만 이슬이 맺히었다. 김 첨지의 눈시울도 뜨끈뜨끈하였다.`},
        {
            page: 2, type: "text", text: `이 환자가 그러고도 먹는 데는 물리지 않았다. 사흘 전부터 설렁탕 국물이 마시고 싶다고 남편을 졸랐다.

        “이런 오라질 년! 조밥도 못 먹는 년이 설렁탕은, 또 처먹고 지랄병을 하게.”라고, 야단을 쳐보았건만, 못 사주는 마음이 시원치는 않았다.
        
        인제 설렁탕을 사줄 수도 있다. 앓는 어미 곁에서 배고파 보채는 개똥이(세 살먹이)에게 죽을 사줄 수도 있다. — 팔십 전을 손에 쥔 김 첨지의 마음은 푼푼하였다. 그러나 그의 행운은 그걸로 그치지 않았다. 땀과 빗물이 섞여 흐르는 목덜미를 기름주머니가 다 된 왜목 수건으로 닦으며, 그 학교 문을 돌아나올 때였다. 뒤에서 <인력거!> 하고 부르는 소리가 난다. 자기를 불러 멈춘 사람이 그 학교 학생인 줄 김 첨지는 한 번 보고 짐작할 수 있었다. 그 학생은 다짜고짜로, “남대문 정거장까지 얼마요?”라고, 물었다.
        
        아마도 그 학교 기숙사에 있는 이로 동기방학을 이용하여 귀향하려 함이리라. 오늘 가기로 작정은 하였건만 비는 오고, 짐은 있고 해서 어찌할 줄 모르다가 마침 김 첨지를 보고 뛰어나왔음이리라. 그렇지 않으면 왜 구두를 채 신지 못해서 질질 끌고, 비록 <고구라> 양복일망정 노박이로 비를 맞으며 김첨지를 뒤쫓아 나왔으랴.`
        },
        {
            page: 3, type: "text", text: `“남대문 정거장까지 말씀입니까.”하고 김 첨지는 잠깐 주저하였다. 그는 이 우중에 우장도 없이 그 먼 곳을 철벅거리고 가기가 싫었음일까? 처음 것, 둘째 것으로 그만 만족하였음일까? 아니다, 결코 아니다. 이상하게도 꼬리를 맞물고 덤비는 이 행운 앞에 조금 겁이 났음이다.그리고 집을 나올 제 아내의 부탁이 마음에 켕기었다. — 앞집 마나님한테서 부르러 왔을 제 병인은 그 뼈만 남은 얼굴에 유일의 생물 같은 유달리 크고 움폭한 눈에 애걸하는 빛을 띠우며, “오늘은 나가지 말아요. 제발 덕분에 집에 붙어있어요. 내가 이렇게 아픈데……”라고, 모기 소리같이 중얼거리고 숨을 걸그렁걸그렁 하였다.

        그때에 김 첨지는 대수롭지 않은 듯이, “압다, 젠장맞을 년, 별 빌어먹을 소리를 다 하네. 맞붙들고 앉았으면 누가 먹여 살릴 줄 알아.”하고, 훌쩍 뛰어나오려니까 환자는 붙잡을 듯이 팔을 내저으며, “나가지 말라도 그래, 그러면 일찌기 들어와요.”하고, 목메인 소리가 뒤를 따랐다.
        
        정거장까지 가잔 말을 들은 순간에 경련적으로 떠는 손, 유달리 큼직한 눈, 울 듯한 아내의 얼굴이 김 첨지의 눈앞에 어른어른하였다. “그래 남대문 정거장까지 얼마란 말이요?”하고 학생은 초조한 듯이 인력거꾼의 얼굴을 바라보며 혼잣말같이, “인천 차가 열 한 점에 있고, 그 다음에는 새로 두 점이든가.”라고, 중얼거린다.`
        },

        {
            page: 4, type: "text", text: `“일 원 오십 전만 줍시요.” 이 말이 저도 모를 사이에 불쑥 김 첨지의 입에서 떨어졌다. 제 입으로 부르고도 스스로 그 엄청난 돈 액수에 놀래었다. 한꺼번에 이런 금액을 불러라도 본 지가 그 얼마만인가! 그러자 그 돈 벌 용기가 병자에 대한 염려를 사르고 말았다. 설마 오늘 내로 어떠랴 싶었다. 무슨 일이 있더라도 제일 제이의 행운을 곱친 것보다도 오히려 갑절이 많은 이 행운을 놓칠 수 없다 하였다.

        “일 원 오십 전은 너무 과한데.” 이런 말을 하며 학생은 고개를 기웃하였다.
        
        “아니올시다. 잇수로 치면 여기서 거기가 사오리가 넘는답니다. 또 이런 진 날에 좀 더 주셔야지요.”하고 빙글빙글 웃는 차부의 얼굴에는 숨길 수 없는 기쁨이 넘쳐 흘렀다.
        
        “그러면 달라는 대로 줄 터이니 빨리 가요.” 관대한 어린 손님은 그런 말을 남기고 총총히 옷도 입고 짐도 챙기러 갈 데로 갔다.`
        },
        {
            page: 5, type: "text", text: `그 학생을 태우고 나선 김 첨지의 다리는 이상하게 거뿐하였다. 달음질을 한다느니보다 거의 나는 듯하였다. 바퀴도 어떻게 속히 도는지 군다느니보다 마치 얼음을 지쳐나가는 <스케이트> 모양으로 미끄러져 가는 듯하였다. 얼은 땅에 비가 내려 미끄럽기도 하였지만.

        이윽고 끄는 이의 다리는 무거워졌다. 자기 집 가까이 다다른 까닭이다. 새삼스러운 염려가 그의 가슴을 눌렀다. <오늘은 나가지 말아요. 내가 이렇게 아픈데!> 이런 말이 잉잉 그의 귀에 울렸다. 그리고 병자의 움쑥 들어간 눈이 원망하는 듯이 자기를 노리는 듯하였다. 그러자 엉엉하고 우는 개똥이의 곡성을 들은 듯싶다. 딸국딸국 하고 숨 모으는 소리도 나는 듯싶다.“왜 이리우, 기차 놓치겠구먼.”하고 탄 이의 초조한 부르짖음이 간신히 그의 귀에 들어왔다. 언뜻 깨달으니 김 첨지는 인력거를 쥔 채 길 한복판에 엉거주춤 멈춰있지 않은가.
        
        “예, 예.”하고, 김 첨지는 또다시 달음질하였다. 집이 차차 멀어갈수록 김 첨지의 걸음에는 다시금 신이 나기 시작하였다. 다리를 재게 놀려야만 쉴새없이 자기의 머리에 떠오르는 모든 근심과 걱정을 잊을 듯이.
        
        정거장까지 끌어다주고 그 깜짝 놀란 일 원 오십 전을 정말 제 손에 쥠에, 제 말마따나 십 리나 되는 길을 비를 맞아 가며 질퍽거리고 온 생각은 아니하고, 거저나 얻은 듯이 고마왔다. 졸부나 된 듯이 기뻤다. 제자식 뻘밖에 안되는 어린 손님에게 몇 번 허리를 굽히며, “안녕히 다녀옵시요.”라고 깍듯이 재우쳤다.`
        },
        {
            page: 6, type: "text", text: `그러나 빈 인력거를 털털거리며 이 우중에 돌아갈 일이 꿈밖이었다. 노동으로 하여 흐른 땀이 식어지자 굶주린 창자에서, 물 흐르는 옷에서 어슬어슬 한기가 솟아나기 비롯하매 일 원 오십 전이란 돈이 얼마나 괜찮고 괴로운 것인 줄 절절히 느끼었다. 정거장을 떠나는 그의 발길은 힘 하나 없었다. 온몸이 옹송그려지며 당장 그 자리에 엎어져 못 일어날 것 같았다.

        “젠장맞을 것! 이 비를 맞으며 빈 인력거를 털털거리고 돌아를 간담. 이런 빌어먹을, 제 할미를 붙을 비가 왜 남의 상판을 딱딱 때려!”
        
        그는 몹시 홧증을 내며 누구에게 반항이나 하는 듯이 게걸거렸다. 그럴 즈음에 그의 머리엔 또 새로운 광명이 비쳤나니 그것은 <이러구 갈 게 아니라 이 근처를 빙빙 돌며 차 오기를 기다리면 또 손님을 태우게 될는지도 몰라>란 생각이었다. 오늘 운수가 괴상하게도 좋으니까 그런 요행이 또한번 없으리라고 누가 보증하랴. 꼬리를 굴리는 행운이 꼭 자기를 기다리고 있다고 내기를 해도 좋을 만한 믿음을 얻게 되었다. 그렇다고 정거장 인력거꾼의 등살이 무서우니 정거장 앞에 섰을 수는 없었다.
        
        그래 그는 이전에도 여러 번 해본 일이라 바로 정거장 앞 전차 정류장에서 조금 떨어지게, 사람 다니는 길과 전찻길 틈에 인력거를 세워놓고 자기는 그 근처를 빙빙 돌며 형세를 관망하기로 하였다. 얼마만에 기차는 왔고, 수십 명이나 되는 손이 정류장으로 쏟아져 나왔다. 그 중에서 손님을 물색하는 김 첨지의 눈엔 양머리에 뒤축 높은 구두를 신고 <망토>까지 두른 기생 퇴물인 듯, 난봉 여학생인 듯한 여편네의 모양이 띄었다. 그는 슬근슬근 그 여자의 곁으로 다가들었다.`
        },
        {
            page: 7, type: "text", text: `“아씨, 인력거 아니 타시랍시요?”

        그 여학생인지 뭔지가 한참은 매우 탯갈을 빼며 입술을 꼭 다문 채 김 첨지를 거들떠보지도 않았다. 김 첨지는 구걸하는 거지나 무엇같이 연해연방 그의 기색을 살피며, “아씨, 정거장 애들보담 아주 싸게 모셔다 드리겠읍니다. 댁이 어디신가요.”하고, 추근추근하게도 그 여자의 들고 있는 일본식 버들고리짝에 제 손을 대었다.
        
        “왜 이래, 남 귀치않게.” 소리를 벽력같이 지르고는 돌아선다. 김 첨지는 어랍시요 하고 물러섰다.
        
        전차는 왔다. 김 첨지는 원망스럽게 전차 타는 이를 노리고 있었다. 그러나 그의 예감(豫感)은 틀리지 않았다. 전차가 빡빡하게 사람을 싣고 움직이기 시작하였을 때 타고 남은 손 하나이 있었다. 굉장하게 큰 가방을 들고 있는걸 보면 아마 붐비는 차 안에 짐이 크다 하여 차장에게 밀려내려온 눈치였다. 김 첨지는 대어섰다.
        
        “인력거를 타시랍시요.”
        
        한동안 값으로 승강이를 하다가 육십 전에 인사동까지 태워다주기로 하였다. 인력거가 무거워지매 그의 몸은 이상하게도 가벼워졌고 그리고 또 인력거가 가벼워지니 몸은 다시금 무거워졌건만 이번에는 마음조차 초조해 온다. 집의 광경이 자꾸 눈앞에 어른거리어 인제 요행을 바랄 여유도 없었다. 나무 등걸이나 무엇 같고 제 것 같지도 않은 다리를 연해 꾸짖으며 갈팡질팡 뛰는 수밖에 없었다.`
        },
        {
            page: 8, type: "text", text: `저놈의 인력거군이 저렇게 술이 취해가지고 이 진 땅에 어찌 가노, 라고 길 가는 사람이 걱정을 하리만큼 그의 걸음은 황급하였다. 흐리고 비오는 하늘은 어둠침침하게 벌써 황혼에 가까운 듯하다. 창경원 앞까지 다달아서야 그는 턱에 닿은 숨을 돌리고 걸음도 늦추잡았다. 한 걸음 두 걸음 집이 가까와올수록 그의 마음조차 괴상하게 누그러웠다. 그런데 이 누그러움은 안심에서 오는 게 아니요, 자기를 덮친 무서운 불행을 빈틈없이 알게 될 때가 박두한 것을 두려워하는 마음에서 오는 것이다.

        그는 불행에 다닥치기 전 시간을 얼마쯤이라도 늘리려고 버르적거렸다. 기적(奇蹟)에 가까운 벌이를 하였다는 기쁨을 할 수 있으면 오래 지니고 싶었다. 그는 두리번두리번 사면을 살피었다. 그 모양은 마치 자기 집 — 곧 불행을 향하고 달려가는 제 다리를 제 힘으로는 도저히 어찌할 수 없으니 누구든지 나를 좀 잡아 다고, 구해 다고 하는 듯하였다.
        
        그럴 즈음에 마침 길가 선술집에서 그의 친구 치삼이가 나온다. 그의 우글우글 살찐 얼굴에 주홍이 돋는 듯, 온 턱과 뺨을 시커멓게 구레나룻이 덮였거늘, 노르탱탱한 얼굴이 바짝 말라서 여기저기 고랑이 패고, 수염도 있대야 턱밑에만 마치 솔잎 송이를 거꾸로 붙여놓은 듯한 김 첨지의 풍채하고는 기이한 대상을 짓고 있었다.`
        },
        {
            page: 9, type: "text", text: `“여보게 김 첨지, 자네 문안 들어갔다 오는 모양일세그려. 돈 많이 벌었을 테니 한 잔 빨리게.”

        뚱뚱보는 말라깽이를 보든 맡에 부르짖었다. 그 목소리는 몸짓과 딴판으로 연하고 싹싹하였다. 김 첨지는 이 친구를 만난 게 어떻게 반가운지 몰랐다. 자기를 살려준 은인이나 무엇같이 고맙기도 하였다.
        
        “자네는 벌써 한잔 한 모양일세그려. 자네도 오늘 재미가 좋아보이.”하고, 김 첨지는 얼굴을 펴서 웃었다.
        
        “압다, 재미 안 좋다고 술 못 먹을 낸가. 그런데 여보게, 자네 왼몸이 어째 물독에 빠진 새앙쥐 같은가? 어서 이리 들어와 말리게.”
        
        선술집은 훈훈하고 뜨뜻하였다. 추어탕을 끓이는 솥뚜껑을 열 적마다 뭉게뭉게 떠오르는 흰 김, 석쇠에서 뻐지짓뻐지짓 구워지는 너비아니 구이며 제육이며 간이며 콩팥이며 북어며 빈대떡……이 너저분하게 늘어놓인 안주 탁자에 김 첨지는 갑자기 속이 쓰려서 견딜 수 없었다. 마음대로 할 양이면 거기 있는 모든 먹음 먹이를 모조리 깡그리 집어삼켜도 시원치 않았다. 하되 배고픈 이는 위선 분량 많은 빈대떡 두 개를 쪼이기도 하고 추어탕을 한 그릇 청하였다.`
        },
        {
            page: 10, type: "text", text: `주린 창자는 음식맛을 보더니 더욱더욱 비어지며 자꾸자꾸 들이라들이라 하였다. 순식간에 두부와 미꾸리 든 국 한 그릇을 그냥 물같이 들이키고 말았다. 세째 그릇을 받아들었을 제 데우던 막걸이 곱배기 두 잔이 더웠다. 치삼이와 같이 마시자 원원히 비었던 속이라 찌르르하고 창자에 퍼지며 얼굴이 화끈하였다. 눌러 곱배기 한 잔을 또 마셨다.

        김 첨지의 눈은 벌써 개개 풀리기 시작하였다. 석쇠에 얹힌 떡 두 개를 숭덩숭덩 썰어서 볼을 불룩거리며 또 곱배기 두 잔을 부어라 하였다.
        
        치삼은 의아한 듯이 김 첨지를 보며, “여보게 또 붓다니, 벌써 우리가 넉 잔씩 먹었네, 돈이 사십 전일세.”라고 주의시켰다.
        
        “아따 이놈아, 사십 전이 그리 끔찍하냐. 오늘 내가 돈을 막 벌었어. 참 오늘 운수가 좋았느니.”
        
        “그래 얼마를 벌었단 말인가?”
        
        “삼십 원을 벌었어, 삼십 원을! 이런 젠장맞을 술을 왜 안부어…… 괜찮다 괜찮다, 막 먹어도 상관이 없어. 오늘 돈 산더미같이 벌었는데.”
        
        “어, 이 사람 취했군, 그만두세.”`
        },
        {
            page: 11, type: "text", text: `“이놈아, 이걸 먹고 취할 내냐, 어서 더 먹어.”하고는 치삼의 귀를 잡아채며 취한 이는 부르짖었다. 그리고 술을 붓는 열 다섯 살 됨직한 중대가리에게로 달려들며, “이놈, 오라질 놈, 왜 술을 붓지 않어.”라고 야단을 쳤다. 중대가리는 히히 웃고 치삼을 보며 문의하는 듯이 눈짓을 하였다. 주정꾼이 눈치를 알아보고 화를 버럭내며, “에미를 붙을 이 오라질 놈들 같으니, 이놈 내가 돈이 없을 줄 알고.”하자마자 허리춤을 훔칫훔칫 하더니 일 원짜리 한 장을 꺼내어 중대가리 앞에 펄쩍 집어던졌다. 그 사품에 몇 푼 은전이 잘그랑 하며 떨어진다.

        “여보게 돈 떨어졌네, 왜 돈을 막 끼얹나.” 이런 말을 하며 일변 돈을 줍는다. 김 첨지는 취한 중에도 돈의 거처를 살피는 듯이 눈을 크게 떠서 땅을 내려다보다가 불시에 제 하는 짓이 너무 더럽다는 듯이 고개를 소스라치자 더욱 성을 내며, “봐라 봐! 이 더러운 놈들아, 내가 돈이 없나, 다리뼉다구를 꺾어놓을 놈들 같으니.”하고 치삼의 주워주는 돈을 받아, “이 원수엣 돈! 이 육시를 할 돈!”하면서, 풀매질을 친다. 벽에 맞아 떨어진 돈은 다시 술 끓이는 양푼에 떨어지며 정당한 매를 맞는다는 듯이 쨍하고 울었다.`
        },
        {
            page: 12, type: "text", text: `곱배기 두 잔은 또 부어질 겨를도 없이 말려가고 말았다. 김 첨지는 입술과 수염에 붙은 술을 빨아들이고 나서 매우 만족한 듯이 그 솔잎 송이 수염을 쓰다듬으며, “또 부어, 또 부어.”라고, 외쳤다.

        또 한 잔 먹고 나서 김 첨지는 치삼의 어깨를 치며 문득 껄껄 웃는다. 그 웃음 소리가 어떻게 컸는지 술집에 있는 이의 눈은 모두 김 첨지에게로 몰리었다. 웃는 이는 더욱 웃으며, “여보게 치삼이, 내 우스운 이야기 하나 할까. 오늘 손을 태고 정거장에까지 가지 않았겠나.”
        
        “그래서.”
        
        “갔다가 그저 오기가 안 됐데그려. 그래 전차 정류장에서 어름어름하며 손님 하나를 태울 궁리를 하지 않았나. 거기 마침 마나님이신지 여학생님이신지 — 요새야 어디 논다니와 아가씨를 구별할 수가 있던가 — <망토>를 두르고 비를 맞고 서 있겠지. 슬근슬근 가까이 가서 인력거 타시랍시요 하고 손가방을 받으랴니까 내 손을 탁 뿌리치고 홱 돌아서더니만 <왜 남을 이렇게 귀찮게 굴어!> 그 소리야말로 꾀꼬리 소리지, 허허!”
        
        김 첨지는 교묘하게도 정말 꾀꼬리 같은 소리를 내었다. 모든 사람은 일시에 웃었다.`
        },
        {
            page: 13, type: "text", text: `“빌어먹을 깍쟁이 같은 년, 누가 저를 어쩌나, <왜 남을 귀찮게 굴어!> 어이구 소리가 처신도 없지, 허허.”

        웃음 소리들은 높아졌다. 그러나 그 웃음 소리들이 사라지기 전에 김 첨지는 훌쩍훌쩍 울기 시작하였다.
        
        치삼은 어이없이 주정뱅이를 바라보며, “금방 웃고 지랄을 하더니 우는 건 또 무슨 일인가.”
        
        김 첨지는 연해 코를 들여마시며, “우리 마누라가 죽었다네.”
        
        “뭐, 마누라가 죽다니, 언제?”
        
        “이놈아 언제는. 오늘이지.”
        
        “엑기 미친 놈, 거짓말 말아.”
        
        “거짓말은 왜, 참말로 죽었어, 참말로... 마누라 시체를 집어 뻐들쳐놓고 내가 술을 먹다니, 내가 죽일 놈이야, 죽일 놈이야.”하고 김 첨지는 엉엉 소리를 내어 운다.`
        },
        {
            page: 14, type: "text", text: `치삼은 흥이 조금 깨어지는 얼굴로, “원 이 사람이, 참말을 하나 거짓말을 하나. 그러면 집으로 가세, 가.”하고 우는 이의 팔을 잡아당기었다.

        치삼의 끄는 손을 뿌리치더니 김 첨지는 눈물이 글썽글썽한 눈으로 싱그레 웃는다.
        
        “죽기는 누가 죽어.”하고 득의가 양양.
        
        “죽기는 왜 죽어, 생때같이 살아만 있단다. 그 오라질 년이 밥을 죽이지. 인제 나한테 속았다.”하고 어린애 모양으로 손뼉을 치며 웃는다.
        
        “이 사람이 정말 미쳤단 말인가. 나도 아주먼네가 앓는단 말은 들었는데.”하고, 치삼이도 어느 불안을 느끼는 듯이 김 첨지에게 또 돌아가라고 권하였다.
        
        “안 죽었어, 안 죽었대도그래.”
        
        김 첨지는 홧증을 내며 확신있게 소리를 질렀으되 그 소리엔 안 죽은 것을 믿으려고 애쓰는 가락이 있었다. 기어이 일 원어치를 채워서 곱배기 한 잔씩 더 먹고 나왔다. 궂은 비는 의연히 추적추적 내린다.`
        },
        {
            page: 15, type: "text", text: `김 첨지는 취중에도 설렁탕을 사가지고 집에 다달았다. 집이라 해도 물론 셋집이요, 또 집 전체를 세든 게 아니라 안과 뚝떨어진 행랑방 한 간을 빌려 든 것인데 물을 길어대고 한 달에 일 원씩 내는 터이다. 만일 김 첨지가 주기를 띠지 않았던들 한 발을 대문에 들여놓았을 제 그곳을 지배하는 무시무시한 정적(靜寂) — 폭풍우가 지나간 뒤의 바다 같은 정적에 다리가 떨렸으리라.

        쿨룩거리는 기침 소리도 들을 수 없다. 그르렁거리는 숨소리조차 들을 수 없다. 다만 이 무덤같은 침묵을 깨뜨리는 — 깨뜨린다느니보다 한층 더 침묵을 깊게 하고 불길하게 하는 빡빡하는 그윽한 소리, 어린애의 젖 빠는 소리가 날 뿐이다. 만일 청각(聽覺)이 예민한 이 같으면 그 빡빡 소리는 빨 따름이요, 꿀떡꿀떡 하고 젖 넘어가는 소리가 없으니 빈 젖을 빤다는 것도 짐작할는지 모르리라.
        
        혹은 김 첨지도 이 불길한 침묵을 짐작했는지도 모른다. 그렇지 않으면 대문에 들어서자마자 전에 없이, “이 난장 맞을 년, 남편이 들어오는데 나와보지도 않아, 이 오라질 년.”이라고 고함을 친 게 수상하다. 이 고함이야말로 제 몸을 엄습해오는 무시무시한 증을 쫓아버리려는 허장성세(虛張聲勢)인 까닭이다.`
        },
        {
            page: 16, type: "text", text: `하여간 김 첨지는 방문을 왈칵 열었다. 구역을 나게 하는 추기 — 떨어진 삿자리 밑에서 나온 먼지내, 빨지 않은 기저귀에서 나는 똥내와 오줌내, 가지각색 때가 케케히 앉은 옷내, 병인의 땀 썩은 내가 섞인 추기가 무딘 김 첨지의 코를 찔렀다.

        방안에 들어서며 설렁탕을 한구석에 놓을 사이도 없이 주정군은 목청을 있는 대로 다 내어 호통을 쳤다.
        
        “이런 오라질 년, 주야장천(晝夜長川) 누워만 있으면 제일이야! 남편이 와도 일어나지를 못해.”라는 소리와 함께 발길로 누운 이의 다리를 몹시 찼다. 그러나 발길에 채이는 건 사람의 살이 아니고 나무등걸과 같은 느낌이 있었다. 이때에 빽빽 소리가 응아 소리로 변하였다. 개똥이가 물었던 젖을 빼어놓고 운다. 운대도 온 얼굴을 찡그려 붙여서, 운다는 표정을 할 뿐이다. 응아 소리도 입에서 나는 게 아니고 마치 뱃속에서 나는 듯하였다. 울다가 울다가 목도 잠겼고 또 울 기운조차 시진한 것 같다.`
        },
        {
            page: 17, type: "text", text: `발로 차도 그 보람이 없는 걸 보자 남편은 아내의 머리맡으로 달려들어 그야말로 까치집 같은 환자의 머리를 꺼들어 흔들며, “이 년아, 말을 해, 말을! 입이 붙었어, 이 오라질 년!”

        “…”
        
        “으응, 이것 봐, 아무 말이 없네.” “…”
        
        “이년아, 죽었단 말이냐, 왜 말이 없어.”
        
        “…”
        
        “으응. 또 대답이 없네, 정말 죽었나버이.”
        
        이러다가 누운 이의 흰 창을 덮은, 위로 치뜬 눈을 알아보자마자, “이 눈깔! 이 눈깔! 왜 나를 바라보지 못하고 천정만 보느냐, 응.”하는 말 끝엔 목이 메었다. 그러자 산 사람의 눈에서 떨어진 닭의 똥 같은 눈물이 죽은 이의 뻣뻣한 얼굴을 어룽어룽 적시었다. 문득 김 첨지는 미칠 듯이 제 얼굴을 죽은 이의 얼굴에 한테 비비대며 중얼거렸다.
        
        “설렁탕을 사다놓았는데 왜 먹지를 못하니, 왜 먹지를 못하니... 괴상하게도 오늘은! 운수가 좋더니만... ”`
        },

    ],
}

export const [useStore] = create(set => ({
    count: { a: { b: 999 } },
    fontSize: "1rem",
    lineHeight: "2rem",
    //   increase: () => set(state => ({ count: state.count + 1 })),
    set: (fn) => set(produce(fn))
}))