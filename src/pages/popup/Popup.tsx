import '@pages/popup/Popup.css';
// import useStorage from '@src/shared/hooks/useStorage';
// import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import avatar from '@assets/img/avatar.png';

const Popup = () => {
  // const theme = useStorage(exampleThemeStorage);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="flex justify-center">
              <img className="h-1/2 w-1/2  " src={avatar} alt="logo" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-6">LDCC AI 어시스턴트</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 px-4">
              LDCC AI 어시스턴트는 GPT를 활용하여 대화형 및 지정 API를 통해 코드를 생성 및 수정해주며, 캐모마일 특화
              코드 생성을 지원하여 프로젝트 환경에서 효율적인 개발을 실현할 수 있도록 지원합니다.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                // className="App-link"
                href="https://chamomile.ldcc.co.kr"
                target="_blank"
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400"
                rel="noreferrer">
                캐모마일 공지사항 확인하기
              </a>
              <a href="https://chamomile.ldcc.co.kr" className="text-sm font-semibold leading-6 text-gray-900">
                설정 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
