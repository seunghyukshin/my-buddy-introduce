import React from "react";
import styled from "styled-components";
import marked from "marked";
import Editor from "../md/Editor";

const Read = () => {
  const renderText = (text) => {
    const __html = marked(text);

    return { __html };
  };

  const text =
    "- **바루투**: 성우는 [김태훈](https://namu.wiki/w/%EA%B9%80%ED%83%9C%ED%9B%88(%EC%84%B1%EC%9A%B0)). 레온하트의 사제이다. 아만과 주인공에게 고대의 석판을 보여준다. 악마의 습격 때 죽을뻔하지만 아만과 플레이어가 구해줘 목숨은 건졌다. 숨겨진 이야기에 따르면 [과거에 사랑하던 여성에게 고백하고 차이면 사제가 되겠다고 마음먹고 고백을 했었다. 그 결과는 아시다시피…](https://namu.wiki/w/%ED%94%84%EB%9E%80%EC%B9%98%EC%8A%A4%EC%BD%94(%EA%B5%90%ED%99%A9)#s-3.1) 세이크리아 사제들 중 온건파인 새벽의 교단이며 급진파인 황혼의 교단이 그의 목숨을 노리고 있다. 같은 새벽의 교단 소속 사제 페데리코가 데런 여성 팬클럽에게 시달려 조언을 구하자 '내가 페데리코처럼 생겼으면 사제가 되지 않았을걸세...' 라고 중얼거린다. 이런 모습을 보면 사제이면서도 신앙심이 별로 없는 현실의 나쁜 목사 내지 땡중이 생각나지만, 그런 쪽의 욕구가 강했을 뿐 나쁜 사람은 아니고 사제로서의 능력도 확실해 그에 따른 입지와 평판은 좋다. 당장 사람들로부터 큰 지지를 받던 아만도 바루투에게 조언을 구하러 갔고, 세이크리아 교단에서 상당한 입지를 가졌고 능력도 출중한 페데리코도 바루투를 자신이 존경하는 인물로 꼽으며 조언을 구할 정도다."
    + "\n- **경비대원 미겔**: 성우는 [박성태](https://namu.wiki/w/%EB%B0%95%EC%84%B1%ED%83%9C(%EC%84%B1%EC%9A%B0)). 로그힐 중간에서 독발톱 도굴단의 침입을 지키는 경비대원이다. 주인공에게 레온하트에 보급품을 가져다 달라고 부탁한다. 이후 아이덴티티 스킬에 대해 짤막하게 안내를 해준다.\n- **시이라**: 레온하트의 음유시인이다. 주인공에게 탈출의 노래를 가르쳐준다. 호감도 신뢰의 보상으로 모험의 서 요리재료를 준다. 스토리상 중요인물은 아니기 때문인지 루테란 성 등에서 그녀의 모델링을 돌려쓰기한 여성 음유시인 npc들을 볼 수 있다."

  return (
    <Container>
      {/* <Editor></Editor> */}
      <Contents>
        <Title>로스트 아크</Title>
        <Index>
          <IndexHead>목차</IndexHead>
          <IndexText>
            <IndexNumber>1.</IndexNumber> 개요
          </IndexText>
          <IndexText>
            <IndexNumber>2.</IndexNumber> 시스템 요구 사양
          </IndexText>
          <IndexText>
            <IndexNumber>3.</IndexNumber> 스토리
          </IndexText>
          <IndexText>
            <IndexNumber>4.</IndexNumber> 등장 인물
          </IndexText>
        </Index>
        <Paragraph>
          <Subtitle>
            <HideButton>{`>`}</HideButton>
            <SubtitleNumber>1.</SubtitleNumber>
            <SubtitleText>개요</SubtitleText>
          </Subtitle>
          <SubContents>
            {`
            스마일게이트 RPG가 개발한 쿼터뷰 액션 MMORPG다.

            2014년 11월 12일 최초 공개했으며 2018년 11월 7일부터 오픈 베타 테스트를 진행하다 2019년 12월 4일 정식 오픈했다.
            
            플랫폼은 PC 하나뿐이지만 현재 콘솔, 모바일 등 각종 플랫폼으로도 개발을 진행하고 있는 중이다
            `}
          </SubContents>
        </Paragraph>
        <Paragraph>
          <Subtitle>
            <HideButton>{`>`}</HideButton>
            <SubtitleNumber>2.</SubtitleNumber>
            <SubtitleText>시스템 요구 사양</SubtitleText>
          </Subtitle>
          <SubContents>
            {`
            정식 오픈 기준 시점으로 최적화는 준수한 편으로, 권장 사양을 지킨다면 원활하게 플레이 가능하다. 2011년 이후에 나온 쿼드코어 이상의 CPU와 16기가 정도의 램을 갖춘 컴퓨터로도 대규모 전투를 연출한 상황에서 프레임이 조금 떨어지는 수준이다. 다만, QHD 이상 해상도에서 공식 요구사항이 극단적으로 높아지는 것을 볼수 있는데, 60프레임 완전 보장을 기준으로 설명된 것으로 추정된다. 실제 플레이 상황에선 FHD 해상도와, 모든 옵션 최상을 기준으로 6세대 이후의 인텔 CPU, 라이젠 이후의 AMD CPU와 GTX1060 정도의 사양으로도 원활한 플레이가 가능하다. UHD 이상급 해상도에선 2080급 이상의 그래픽 카드 사용을 권장한다.[9]

            요구 사양에 라데온 그래픽카드를 아예 배제한 것도 특징인데, 구형 API (DX9) 사용[10], 강제 수직동기화 활성화에 조절도 불가능한 점과 더불어[11] 성능 문제가 심해서 아예 DXVK로 돌리는 게 훨씬 나을 정도. 수직동기화도 DXVK 콘픽으로 해제할 수 있다는 소소한 장점은 덤이다. 사실 스타크래프트 2와 달리 지포스에서도 DXVK쪽의 성능이 더 높다.# 반대로 DXVK가 안 통하고 라데온 지연 방지를 써야 하는 경우도 있다고 한다
            `}
          </SubContents>
        </Paragraph>
        <Paragraph>
          <Subtitle>
            <HideButton>{`>`}</HideButton>
            <SubtitleNumber>3.</SubtitleNumber>
            <SubtitleText>스토리</SubtitleText>
          </Subtitle>
          <SubContents>
            {`
            플레이어가 트리시온으로 소환된다. 베아트리스는 악마들에 의해 위험에 처한 세상을 구하기 위해선 아크가 필요하다고 한다. 예언의 서를 읽으며 자신의 운명을 정한 뒤(=세부 직업을 정한 뒤) 본격적으로 모험을 떠나게 된다.

            시간이 흐른 후, 잊혀진 땅 트루아에 도착하여 분주하게 인원을 내릴 준비를 하는 탐사선 안의 플레이어를 보여주며 로스트아크 로고가 나오고 게임이 시작된다.[1]
            
            세이크리아 교단의 사제 '모피어스'[스포일러]와 그의 의뢰에 따라 잊혀진 도시를 조사하는 탐사대와 같이 행동하며 게임의 기본적인 조작을 배우고 극 초반 스토리를 진행하게 된다. 기존 트리시온에서 루나패스로 바로 넘어갔던 때에 비하면 개연성이 엄청 매끄러워졌다.
            
            여기서 프롤로그를 생략하는 선택을 하면 바로 루나 패스로 이동하게 된다.
            `}
          </SubContents>
        </Paragraph>
        <Paragraph>
          <Subtitle>
            <HideButton>{`>`}</HideButton>
            <SubtitleNumber>4.</SubtitleNumber>
            <SubtitleText>등장 인물</SubtitleText>
          </Subtitle>
          <SubContents dangerouslySetInnerHTML={renderText(text)}>
            {/* {`
            튜토리얼에선 각 직업군마다 다른 스토리를 진행하지만[3] 10레벨을 달성하면 트리시온의 부름을 받고 아크를 찾아달라는 부탁과 함께 전직을 하게 된다. 이후 레온하트로 워프해 아만과 함께 아르테미스에서부터 유디아, 루테란까지 여정을 함께 한다.

            성격은 일단 다른 사람의 부탁을 지나치게 잘 들어준다. 실리안 왕자의 왕위 탈환전에 참여한 것도 결국 아크를 찾기 위함이라곤 해도 너무 쉽게 들어주는 모습을 보면 호구인 건지 자신있는 건지 알 수 없을 정도이다. 대화 텍스트를 보면 대체적으로 선량한 성향에 가까운 인물이다.
            `} */}
          </SubContents>
        </Paragraph>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: #efefef;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Contents = styled.div`
  height: 100%;
  width: 70vw;
  background-color: white;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  // align-items:center;

  padding: 40px;
`;

const Title = styled.span`
  color: #373a3c;
  font-size: 40px;
  font-weight: bold;
`;

const Index = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  align-self: flex-start;
  margin: 20px 0 20px 0;
`;

const IndexHead = styled.span`
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
`;

const IndexNumber = styled.span`
  color: #0275d8;
`;

const IndexText = styled.span`
  color: #373a3c;
  font-size: 16px;
  display: block;
`;

const Paragraph = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 20px 0 20px 0;
`;

const Subtitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 14px;
`;

const HideButton = styled.span`
  color: #666;
  font-weight: bold;
  font-size: 26px;
  margin: 4px;
`;

const SubtitleNumber = styled.span`
  font-size: 26px;
  color: #0275d8;
  font-weight: bold;

  display: inline-block;
  margin: 4px;
`;

const SubtitleText = styled.span`
  font-size: 26px;
  color: #373a3c;

  display: inline-block;
  font-weight: bold;
  margin: 4px;
`;

const SubContents = styled.span`
  font-size: 14px;
  color: #373a3c;

  & li {
    margin-left: 20px;
    margin-bottom:20px;
  }

  & a{
    color:#0275d8;
    text-decoration: none;
  }
`;

export default Read;
