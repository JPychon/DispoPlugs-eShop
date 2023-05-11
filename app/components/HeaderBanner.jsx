import {Text} from '~/components';
import {Alert} from 'flowbite-react';

export function HeaderBanner({title, description}) {
  return(
      <div className="mb-0 top-0 left-0 z-50 flex w-full pt-2 bg-primary flex flex-col">
          <div className="flex items-center mx-auto mb-2">
              <Text className="flex text-center text-lightGray items-center overflow-hidden text-fine font-semibold lg:text-[14px]">
                  <span className="ml-1 text-orange">{title}&nbsp;</span><span>{description}</span>
              </Text>
          </div>
          <div className='flex justify-center text-center bg-[#e1effe] border-notice border-y-2 border-[#9a3412]'>
            <Alert
                withBorderAccent={false}
                rounded={false}
                className='text-white text-center'
                >
                <span>
                    <span className="font-black">
                        DEAL:
                    </span>
                {' '}Buy four disposables & receive the 4th free! 
                </span>
            </Alert>
          </div>
      </div>
  )
}