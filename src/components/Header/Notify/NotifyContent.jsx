import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Tag } from "primereact/tag";

export const NotifyContent = ({data}) => {
const { image, icon , description, formatDate, tagValue, tagIcon  } = data

  return (
    <>
      <div className="w-full h-20">
        <div className="flex px-2 my-2 w-full h-full justify-center items-center">
          <div className="flex ml-4 relative">
            <Badge
              className="absolute left-[-13px] top-[20px]"
              severity="danger"
            ></Badge>
            <Avatar
              image={image}
              size="large"
              shape="circle"
            />
            <Button
              className=" absolute left-[-25px] top-[32px]"
              icon={icon}
              rounded
              severity="info"
              aria-label="Favorite"
              style={{
                width: "25px",
                height: "25px",
              }}
            />
          </div>
          <div>
            <p className="font-bold w-full text-[13px]">
              {description}
            </p>
            <div className="pt-2 flex items-center text-[10px]">
              <Tag
                style={{
                  height: "20px",
                  margin: "0 7px 0 0",
                  backgroundColor: "white",
                  color: "blue",
                  padding: 0,
                  fontWeight: 300,
                }}
                value={tagValue}
                icon={tagIcon}
                severity="info"
                rounded
              ></Tag>
              <div className="w-1 h-1 bg-black relative top-[1px] rounded-full mr-2" />
              <p className="relative top-[1px]">{formatDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
