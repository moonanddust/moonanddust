// 读取另一个HTML文件中的内容并计算出现次数
async function countLinks() {
    const response = await fetch('diary.html');
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const links = doc.getElementsByTagName('a');
    let dustCount = 0;
    let moonCount = 0;
    for (let i = 0; i < links.length; i++) {
      const id = links[i].getAttribute('id');
      if (id === 'dust') {
        dustCount++;
      } else if (id === 'tsuki') {
        moonCount++;
      } else if (id === 'eggtart') {
        moonCount++;
      } else if (id === 'matcha') {
        dustCount++;
      }
    }
    return { dustCount, moonCount };
  }
  
  // 在页面上展示出现次数
  async function showResult() {
    const { dustCount, moonCount } = await countLinks();
    const resultElem1 = document.getElementById('dustcount');
    resultElem1.textContent = `${dustCount}`;
    const resultElem2 = document.getElementById('mooncount');
    resultElem2.textContent = `${moonCount}`;
  }
  
  showResult();
  