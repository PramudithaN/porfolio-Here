import React from "react";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { Project, ProjectDev } from "../types";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { Spin } from "antd";

interface DesignCardProps {
  project: Project;
}

export default function DesignCard({ project }: DesignCardProps) {
  const [repositories, setRepositories] = useState<ProjectDev[]>([]);
  const [loading, setLoading] = useState(true);
  const [githubProjects, setGithubProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request("GET /users/{username}/repos", {
          username: "PramudithaN",
          sort: "updated",
          per_page: 6,
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
        });
        interface GithubRepo {
          name: string;
          description: string;
          link: string;
          stars: number;
          forks: number;
          language: string | null;
          updatedAt: string;
        }

        const repos: GithubRepo[] = response.data.map((repo: any) => ({
          name: repo.name,
          description: repo.description || "No description available",
          link: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updatedAt: new Date(repo.updated_at).toLocaleDateString(),
        }));

        setGithubProjects(repos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {githubProjects.map((project, index) => (
          <div key={index} className="mb-6 bg-zinc-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h4 className="font-medium text-zinc-900">{project.name}</h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-zinc-600">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {project.stars}
                </span>
                <span className="flex items-center">
                  <GitFork className="w-4 h-4 mr-1" />
                  {project.forks}
                </span>
              </div>
            </div>
            <p className="text-zinc-600 mt-2">{project.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-blue-600">{project.language}</span>
              <span className="text-sm text-zinc-500">
                Updated: {project.updatedAt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Spin>
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    //   {repositories.map((repo) => (
    //     <div
    //       key={repo.id}
    //       className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-lg transition-all hover:shadow-xl"
    //     >
    //       <div className="p-6">
    //         <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
    //           {repo.name}
    //         </h3>
    //         <p className="mt-2 text-zinc-600 dark:text-zinc-300">
    //           {repo.description || "No description available"}
    //         </p>
    //         <div className="mt-4 flex flex-wrap gap-2">
    //           {repo.topics?.map((topic) => (
    //             <span
    //               key={topic}
    //               className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300"
    //             >
    //               {topic}
    //             </span>
    //           ))}
    //         </div>
    //         <a
    //           href={repo.html_url}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
    //         >
    //           View Repository <ExternalLink className="h-4 w-4" />
    //         </a>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}
