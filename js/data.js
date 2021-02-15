const qnaList = [
    {
      q: '1. 동그라미는 몇 개인가요? O O ',
      a: [
        { answer: 'a. 4개', score: 1 },
        { answer: 'b. 3개', score: 1 },
        { answer: 'c. 2개', score: 10 },
        { answer: 'd. 이거 왜 세고 있는거지..?', score: 1}
      ]
    },
    {
      q: '2. 30-5와 계산한 값이 같은 것은?',
      a: [
        { answer: 'a. 15+5', score: 1 },
        { answer: 'b. 10+10', score: 1 },
        { answer: 'c. 20+5', score: 10 },
        { answer: 'd. 이런 문제 꼭 계산 두 번씩 시키네..', score: 1}
      ]
    },
    {
      q: '3. 설명이 옳은 것을 찾아 고르시오.',
      a: [
        { answer: 'a. 직선은 선분의 일부분입니다.', score: 10 },
        { answer: 'b. 직선은 끝이 없습니다.', score: 1 },
        { answer: 'c. 두 점을 이은 선을 직선이라고 합니다.', score: 1 },
        { answer: 'd. 솔직히 이거 실생활에 필요하냐?', score: 1}
      ]
    },
    {
      q: '4. 1.4L들이 통에 물이 800mL 들어 있습니다. 몇 mL의 물을 더 부어야 병이 가득 찰까요?',
      a: [
        { answer: 'a. 400mL', score: 1 },
        { answer: 'b. 500mL', score: 1 },
        { answer: 'c. 600mL', score: 10 },
        { answer: 'd. 좀 넘치면 되지.. 눈대중으로 해라', score: 1}
      ]
    },
    {
      q: '5. 한 변이 3과 2분의 1 cm인 정사각형 모양읱 타일이 20장 붙어 있습니다. 타일이 붙어 있는 부분의 넓이는 몇 제곱센티미터인지 구하시오.',
      a: [
        { answer: 'a. 225 제곱센티미터', score: 1 },
        { answer: 'b. 235 제곱센티미터', score: 1 },
        { answer: 'c. 245 제곱센티미터', score: 10 },
        { answer: 'd. 솔직히 3과 2분의 1이라는 말은 이때 이후로 들어본 적이 없다.', score: 1 }
      ]
    },
    {
      q: '6. 반지름의 길이가 각각 2mm, 3mm인 두 구가 있다. 두 구의 겉넓이의 비를 구하시오.',
      a: [
        { answer: 'a. 2:3', score: 1 },
        { answer: 'b. 3:4', score: 1 },
        { answer: 'c. 4:9', score: 10 },
        { answer: 'd. 쬐깐해서 눈에 보이지도 않는걸 어떻게 아냐?', score: 1}
      ]
    },
    {
      q: '7. 남학생 2명, 여학생 3명 중에서 대표 2명을 뽑을 때, 2명 모두 남학생이거나 여학생일 경우의 수를 구하여라.',
      a: [
        { answer: 'a. 3', score: 1 },
        { answer: 'b. 4', score: 10 },
        { answer: 'c. 5', score: 1},
        { answer: 'd. 뽑는 사람 마음이지 ㅡ.ㅡ', score: 1}
      ]
    },
    {
      q: '8. 이차방정식 (x+1)(x-2)=-2x+4의 두 근의 합을 구하여라.',
      a: [
        { answer: 'a. -1', score: 10 },
        { answer: 'b. 1', score: 1 },
        { answer: 'c. 2', score: 1 },
        { answer: 'd. 난 몰랑....', score: 1}
      ]
    },
    {
      q: '9. 삼각함수 f(x)=sin kx(x>0) 의 그래프와 직선 y=0.5가 만나는 점의 x좌표를 크기순으로 a,b,c라고 할 때, f(a+b+c)의 값은?',
      a: [
        { answer: 'a. 0.5', score: 1 },
        { answer: 'b. 0', score: 1 },
        { answer: 'c. -0.5', score: 10 },
        { answer: 'd. 쌤 이거 문제가 이상해요', score: 1 }
      ]
    },
    {
      q: '10. 지금까지 맨 마지막 선택지만 골랐습니까?',
      a: [
        { answer: 'a. 그렇다', score: 1 },
        { answer: 'b. 아니다', score: 10 }
      ]
    }
  ]
  
  const infoList = [
    {
      from: 10,
      to: 20,
      mLeft: '10%',
      name: '수학연령 : 초등학교 3학년',
      desc: '혹시 청개구리 유형? 그렇다면 진지하게 다시 해봐요!'
    },
    {
      from: 21,
      to: 30,
      mLeft: '25%',
      name: '수학나이 : 초등학교 4학년',
      desc: '다행히 수학 사춘기가 아직 오지 않았네요! 사춘기가 오기 전에 도망가세요!'
    },
    {
      from: 31,
      to: 40,
      mLeft: '35%',
      name: '수학나이 : 초등학교 5학년',
      desc: 'Hurry up! 수학 사춘기가 오기 전에 도망가세요! '
    },
    {
      from: 41,
      to: 50,
      mLeft: '45%',
      name: '수학나이 : 초등학교 6학년',
      desc: '곧 사춘기가 찾아옵니다! 몸조심하세요!'
    },
    {
      from: 51,
      to: 60,
      mLeft: '55%',
      name: '수학나이 : 중학교 1학년',
      desc: '질풍노도의 시기를 앞두고 있는 당신! 마음 단단히 먹으세요!'
    },
    {
      from: 61,
      to: 70,
      mLeft: '65%',
      name: '수학나이 : 중학교 2학년',
      desc: '질풍노도의 시기를 보내는 당신! 포기하지 않는 당신이 멋지답니다!'
    },
    {
        from: 71,
        to: 80,
        mLeft: '75%',
        name: '수학나이 : 중학교 3학년',
        desc: '사춘기.. 지나갔나?'
    },
    {
        from: 81,
        to: 90,
        mLeft: '85%',
        name: '고등학교 1학년',
        desc: '이제는 철 들 때가 됐죠..?'
    },
    {
        from: 91,
        to: 100,
        mLeft: '90%',
        name: '고등학교 2학년',
        desc: '수학 사춘기를 극복한 당신, 문제를 아주 열심히 푸셨군요!'
    }
  ]